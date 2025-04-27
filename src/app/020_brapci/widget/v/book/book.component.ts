import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
    standalone: false,
    selector: 'app-v-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() public data: Array<any> | any;
  @Input() public full: boolean = true;

  @Input() public header: Array<any> | any;
  public userID: Array<any> | any = null;

  constructor(
    private brapciService: BrapciService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userID = this.localStorageService.get('user');

    this.header = [];
    this.header = { title: 'Livro' };
  }



  goURL(ID: string): void {
    if (!ID) {
      console.warn('ID inválido para navegação.');
      return;
    }

    const url = `/v/${ID}`;
    window.open(url, '_blank'); // Abre em uma nova aba
  }
}
