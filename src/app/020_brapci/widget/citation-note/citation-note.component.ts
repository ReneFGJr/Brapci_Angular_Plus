import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-citation-note',
  templateUrl: './citation-note.component.html',
  styleUrl: './citation-note.component.scss',
})
export class CitationNoteComponent {
  @Input() public citacao: Array<any> | any;

  copiarTextoID(id: string): void {
    // Busca o elemento pelo ID
    const elemento = document.getElementById(id);

    if (elemento) {
      // Obtém o conteúdo da div como texto puro
      const conteudo = elemento.innerText;

      // Copia o texto para o clipboard
      navigator.clipboard
        .writeText(conteudo)
        .then(() => {
          alert('Conteúdo copiado com sucesso!');
        })
        .catch((err) => {
          console.error('Erro ao copiar o texto: ', err);
        });
    } else {
      console.error(`Elemento com o ID "${id}" não foi encontrado.`);
    }
  }

  copiarTexto(conteudo: string) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = conteudo; // Coloca o HTML
    const textoPuro = tempElement.innerText || tempElement.textContent || ''; // Remove as tags HTML
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
