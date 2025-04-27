import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-index-authors',
  templateUrl: './index-authors.component.html',
})
export class IndexAuthorsComponent {
  public header:Array<any> | any
  public type = 'author';
  public data: Array<any> | any;
  public ltr: string = 'A';
  public sub: Array<any> | any;
  public typeName: string = 'de Autores';
  public langs: Array<any> = ['pt', 'en', 'es'];
  public lang: string = 'pt';

  public ltrs: Array<any> = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'X',
    'Y',
    'W',
    'Z',
  ];

  constructor(
    public brapciService: BrapciService,
    private route: ActivatedRoute
  ) {}

  ngOnChange() {

  }

  getLang(lg: string) {
    this.lang = lg;
  }
  getTerms(ltr: string, lang: string) {
    this.ltr = ltr;
    this.header = { title: 'Índice de autores #' + this.ltr };
    this.brapciService
      .api_post('indexs/' + this.type + '/' + this.ltr + '/' + this.lang)
      .subscribe((res) => {
        this.data = res;
      });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      //this.id = +params['id']; // (+) converts string 'id' to a number
      this.ltr = params['id']; // (+) converts string 'id' to a number
      this.lang = params['lang']; // (+) converts string 'id' to a number

      if (this.lang == '' || this.lang == undefined) {
        this.lang = 'pt';
      }
      this.typeName = 'de Autores';
      this.getTerms(this.ltr, this.lang);
    });
  }
}
