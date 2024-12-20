import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-citation-note',
  templateUrl: './citation-note.component.html',
  styleUrl: './citation-note.component.scss',
})
export class CitationNoteComponent {
  @Input() public citacao: Array<any> | any;

  copiarTexto(conteudo: string) {
    navigator.clipboard
      .writeText(conteudo)
      .then(() => {
        alert('Texto copiado com sucesso!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto: ', err);
      });
  }
}
