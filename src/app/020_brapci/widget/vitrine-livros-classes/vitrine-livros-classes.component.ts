import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from '../../../010_service/brapci.service';

@Component({
  selector: 'app-vitrine-livros-classes',
  templateUrl: './vitrine-livros-classes.component.html',
  styleUrl: './vitrine-livros-classes.component.scss',
  animations: [
    trigger('slideInAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition(':enter', [animate('0.3s ease-out')]),
      transition(':leave', [
        animate('0.3s ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class VitrineLivrosClassesComponent {
  @Input() public books: Array<any> | any;
  @Input() public faceta: string = '';

  public full: boolean = false;
  data: Array<any> | any;

  constructor(
    private route: ActivatedRoute,
    private brapciService: BrapciService
  ) {}

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

  getBookClass(index: number): string {
    const relativeIndex = index - this.sliderIndex;
    if (relativeIndex === 0) {
      return 'in-view';
    } else if (relativeIndex === -1) {
      return 'left';
    } else if (relativeIndex === 1) {
      return 'right';
    } else if (relativeIndex <= -2) {
      return 'far-left';
    } else if (relativeIndex >= 2) {
      return 'far-right';
    } else {
      return '';
    }
  }

  selectBook(book: any): void {
    this.selectedBook = book;
    let ID = book.ID;

    let url = `brapci/get/v1/` + ID;
    let dt: Array<any> | any = [];

    this.brapciService.api_post(url, dt).subscribe((res) => {
      this.data = res;
    });
  }

  closeDetails(): void {
    this.selectedBook = null;
  }
}
