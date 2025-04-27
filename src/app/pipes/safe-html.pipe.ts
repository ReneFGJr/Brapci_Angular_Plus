import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: false,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    let formatted = value;

    // converte "**texto**" para "<b>texto</b>"
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

    // converte quebras de linha para "<br>"
    formatted = formatted.replace(/\r?\n|\r/g, '<br>');

    // converte "ollama:" para "chat:"
    formatted = formatted.replace(/ollama:/g, 'chatBrapci:');

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
