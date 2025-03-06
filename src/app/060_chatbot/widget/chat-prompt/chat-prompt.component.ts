import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OllamaService } from 'src/app/010_service/ollama.service';

@Component({
  selector: 'app-chat-prompt',
  templateUrl: './chat-prompt.component.html',
  styleUrl: './chat-prompt.component.scss',
})
export class ChatPromptComponent {
  chatHistory: { sender: string; message: string }[] = [];
  busy: boolean = false;

  // Crie um FormGroup com um FormControl para o campo de mensagem
  chatForm = new FormGroup({
    userMessage: new FormControl(''), // Campo de mensagem do usuário
  });

  constructor(private ollamaService: OllamaService) {}

  sendMessage() {
    const userMessage = this.chatForm.value.userMessage; // Obtenha o valor do campo
    if (userMessage?.trim()) {
      this.chatHistory.push({ sender: 'user', message: userMessage });
      this.busy = true;
      this.ollamaService.sendMessage(userMessage).subscribe((response) => {
        this.chatHistory.push({ sender: 'ollama', message: response.response });
        this.busy = false;
      });
      this.chatForm.reset(); // Limpe o campo de mensagem após enviar
    }
  }
}
