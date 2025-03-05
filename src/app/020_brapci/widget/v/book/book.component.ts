import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() public data: Array<any> | any;
  @Input() public full: boolean = true;

  constructor(private router: Router) {}

  goURL(ID: string): void {
    if (!ID) {
      console.warn('ID inválido para navegação.');
      return;
    }

    const url = `/v/${ID}`;
    window.open(url, '_blank'); // Abre em uma nova aba
  }
}
