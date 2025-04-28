import { Component, Input } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-term-language-class',
  templateUrl: './term-language-class.component.html',
  styleUrl: './term-language-class.component.scss',
})
export class TermLanguageClassComponent {
  constructor(private brapciService: BrapciService) {} // Injetando o serviço ServiceBrapci no construtor
  header: Array<any> | any;
  data: Array<any> | any;
  language: string = 'en';
  @Input() ltr: string = '';

  setLang(lang: string) {
    this.language = lang;
  }

  ngOnInit() {
    this.update(this.ltr);
  }

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

  getTerms(ltr: string) {
    this.ltr = ltr;
    this.update(ltr)
  }

  marcarTexto(id: string = '') {
    if (confirm(id + '=>' + this.language)) {
      this.brapciService
        .api_post('brapci/setTermLang/' + id + '/' + this.language, [])
        .subscribe(
          (data: any) => {
            this.update(this.ltr);
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );
    }
  }
  //https://cip.brapci.inf.br/api/indexs/subject/A/pt
  update(ltr:string) {
    this.brapciService.api_post('indexs/subject/'+this.ltr+'/pt', {}).subscribe(
      (data: any) => {
        this.data = data;
        console.log(data);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
