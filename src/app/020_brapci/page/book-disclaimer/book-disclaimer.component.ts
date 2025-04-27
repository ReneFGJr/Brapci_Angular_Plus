import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-book-disclaimer',
  templateUrl: './book-disclaimer.component.html',
  styleUrl: './book-disclaimer.component.scss',
})
export class BookDisclaimerComponent {
  public header: Array<any> | any;
  public data: { jnl_rdf: string } = { jnl_rdf: 'books' }; // Ajustado para refletir um objeto, não um array
  public sub: Array<any> | any;
  public dados: Array<any> | any;
  public id: number = 0;
  public check: string = '';
  public status: number = 2;

  constructor(
    public brapciService: BrapciService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.check = params['check']; // (+) converts string 'id' to a number

      let url = 'brapci/book/disclaimer/' + this.id + '/' + this.check;

      this.status = 2;
      this.brapciService.api_post(url).subscribe(
        (res) => {
          this.sub = res;
          this.dados = JSON.parse(this.sub.bs_post)
          this.status = 3;
        },
        (error) => error
      );
    });
  }
}
