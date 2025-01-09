import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-book-submit',
  templateUrl: './book-submit.component.html',
  styleUrl: './book-submit.component.scss',
})
export class BookSubmitComponent {
  public data: { jnl_rdf: string } = { jnl_rdf: 'books' }; // Ajustado para refletir um objeto, não um array

  public books: Array<any> | any;
  public header: { title: string } = {
    title: 'Submissão de obras para Brapci Livros',
  };
  public contato:string =  'brapcici@gmail.com';

  constructor(private brapciService: BrapciService) {}

  public toolsName: string = 'Submissão de Livro';
  public buttonName: string = 'Confirmar submissão';
  public api_endpoint: string = 'tools/upload';

  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Submissão de Livro',
  };
}
