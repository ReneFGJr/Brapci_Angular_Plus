import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OllamaService } from 'src/app/010_service/ollama.service';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    let formatted = value;

    // Substitui "\_" por "_"
    formatted = formatted.replace(/\\_/g, '_');

    // Substitui "```texto```" por "<pre>texto</pre>"
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');

    // Substitui "**texto**" por "<b>texto</b>"
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

    // Substitui quebra de linha por <br>
    formatted = formatted.replace(/\r?\n|\r/g, '<br>');

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}

@Component({
    standalone: false,
    selector: 'app-chat-prompt',
  templateUrl: './chat-prompt.component.html',
  styleUrl: './chat-prompt.component.scss',
})
export class ChatPromptComponent {
  chatHistory: { sender: string; message: string }[] = [];
  messages: { role: string; content: string }[] = [{ role: 'user', content: 'Answer in english!' }];
  busy: boolean = false;

  // Crie um FormGroup com um FormControl para o campo de mensagem
  chatForm = new FormGroup({
    userMessage: new FormControl(''), // Campo de mensagem do usuário
  });

  constructor(private ollamaService: OllamaService) {}

  sendMessage() {
    const userMessage = this.chatForm.value.userMessage;

    if (userMessage?.trim()) {
      this.chatHistory.push({ sender: 'user', message: userMessage });
      this.busy = true;

      const context = this.chatHistory
        .map(
          (msg) =>
            `${msg.sender === 'user' ? 'Usuário:' : 'Chat:'} ${msg.message}`
        )
        .join('\n');

      this.messages.push({
        role: 'user',
        content: userMessage,
      });

      console.log("MESSAGE",this.messages)

      this.ollamaService
        .sendMessageWithContext(userMessage, this.messages)
        .subscribe(
          (response) => {
            const data = response.response;
            this.messages.push({
              role: response.message.role,
              content: response.message.content,
            });
            this.chatHistory.push({
              sender: 'ollama',
              message: response.message.content,
            });
            this.busy = false;
          },
          (error) => {
            this.chatHistory.push({
              sender: 'ollama',
              message: '**Erro ao buscar resposta.**',
            });
            this.busy = false;
          }
        );
      this.chatForm.reset();
    }
  }
}
