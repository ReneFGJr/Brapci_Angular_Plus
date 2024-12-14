import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
  selector: 'app-v-enancib',
  templateUrl: './enancib.component.html',
})
export class EnancibComponent {
  @Input() public data: Array<any> | any;
  public userID: Array<any> | any = null;

  public url: string = '';
  public rdf: string = '/assets/img/icone_rdf.png';
  public header: Array<any> | any = null;
  public chavesDoObjeto: Array<any> | any = null;
  public valoresDoObjeto: Array<any> | any = null;
  public section = [{ name: 'LIVRO' }];
  public langs: Array<any> = ['pt', 'en', 'es', 'fr'];
  public abstract: Array<any> = [
    { pt: 'Resumo', en: 'Abstract', es: 'Resumen', fr: 'Résumé' },
  ];
  public keywords: Array<any> = [
    {
      pt: 'Palavras-chave',
      en: 'Keywords',
      es: 'Palabras clave',
      fr: 'Mots clés',
    },
  ];

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  objectKeys = Object.keys;
  objectValues = Object.values;

  ngOnInit(): void {
    this.userID = this.localStorageService.get('user');
    this.header = [];
    this.header = { title: 'Livro' };
    if (this.data.data.hasIssueOf.nn) {
      this.chavesDoObjeto = Object.keys(this.data.data.hasIssueOf.nn[0]);
      this.valoresDoObjeto = Object.values(this.data.data.hasIssueOf.nn[0]);
    } else {
      if (this.data.data.hasIssueOf.pt) {
        this.chavesDoObjeto = Object.keys(this.data.data.hasIssueOf.pt[0]);
        this.valoresDoObjeto = Object.values(this.data.data.hasIssueOf.pt[0]);
      }
    }
  }
}
