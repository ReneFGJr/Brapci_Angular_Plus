import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vitrine-livros-classes',
  templateUrl: './vitrine-livros-classes.component.html',
  styleUrl: './vitrine-livros-classes.component.scss',
})
export class VitrineLivrosClassesComponent {
  @Input() public books: Array<any> | any;

  selectedBook: any = null;
  sliderIndex = 0;

  get sliderTransform(): string {
    return `translateX(${-this.sliderIndex * 160}px)`;
  }

  scrollLeft(): void {
    this.sliderIndex = Math.max(this.sliderIndex - 1, 0);
  }

  scrollRight(): void {
    this.sliderIndex = Math.min(this.sliderIndex + 1, this.books.length - 5); // Ajuste para a largura visível
  }

  selectBook(book: any): void {
    this.selectedBook = book;
  }

  closeDetails(): void {
    this.selectedBook = null;
  }
}
