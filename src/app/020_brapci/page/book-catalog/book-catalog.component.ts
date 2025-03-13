import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrl: './book-catalog.component.scss',
})
export class BookCatalogComponent {
  public header: Array<any> | any;
  public data: { jnl_rdf: string } = { jnl_rdf: 'books' }; // Ajustado para refletir um objeto, não um array
  public books: Array<any> | any;

  constructor(
    public brapciService: BrapciService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let url = 'book/catalog';
      this.brapciService.api_post(url).subscribe(
        (res) => {
          this.books = res;
        },
        (error) => error
      );
    });
  }
}
