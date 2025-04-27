import { Component } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'], // Corrigido para 'styleUrls'
})
export class LivrosComponent {
  public data: { jnl_rdf: string } = { jnl_rdf: 'books' }; // Ajustado para refletir um objeto, não um array

  public books: Array<any> | any;
  public header: { title: string } = { title: 'Brapci Livros' };

  constructor(private brapciService: BrapciService) {}

  ngOnInit() {
    this.brapciService.api_post('book/vitrine').subscribe((res) => {
      this.books = res;
    });
  }
}
