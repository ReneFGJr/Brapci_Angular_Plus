import { Component } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../010_service/local-storage.service';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public logo: string = '/assets/img/brand_brapci_shadown.png';
  public header = { title: 'Base de Dados em Ciência da Informação' };
  public cookie: Array<any> | any = [];
  public data: Array<any> | any = [
    {
      description:
        'A Brapci, sigla para Base de Dados em Ciência da Informação, é uma plataforma digital brasileira dedicada à coleta, preservação e ao acesso de literatura científica na área de Ciência da Informação. Ela abrange uma ampla gama de publicações, incluindo artigos de periódicos, trabalhos de eventos, livros e capítulos de livros, principalmente de fontes brasileiras e américa latina.',
      keywords:
        'Brapci; Arquivologia; Biblioteconomia; Ciência da Informação; Base de Dados',
    },
  ];
  public status = '0'
  public status_ok: number = 0;
  public status_message: string = 'Carregando...';
  public selected: number = 0;
  public works: Array<any> | any;
  public totalw: number = 0;
  public total: number = 0;
  public result: Array<any> | any;
  public results: Array<any> = [];
  public filters: boolean = false;
  public advanceSearch: string = '';
  public term: string = '';
  public year_start: number = 1962;
  public year_end: number = new Date().getFullYear() + 1;
  public APIversion: string = '1';
  public loading: boolean = false;
  public loaging_img: string = '/assets/img/loading.svg';
  public class_filter: string = '';
  private basket: Array<any> = [];

  public msg_data_mark: string = 'Selecionar item para biblioteca pessoal';
  public msg_cover: string = 'Capa da publicação';
  public msg_noresult: string = 'Nenhum resultado encontrado!';
  public msg_result: string = 'resultado(s)';
  public msg_show: string = 'Mostrando';
  public msg_of: string = 'de';

  public yearsI: Array<any> = [];
  public yearsF: Array<any> = [];
  public currentYear: number;
  public terms: string = '';

  public tips: string = '';
  public search: string = '';

  public sessionStorage = sessionStorage;

  list: any[];
  fields: any[];

  listArray: string[] = [];
  sum = 1;
  display = 5;
  direction = '';
  notFound: string = '';

  field_search: string = 'FL';

  constructor(
    private fb: FormBuilder,
    private brapciService: BrapciService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    /************************************************************ Collection */
    this.list = [
      { name: 'Revistas Brasileiras', value: 'RA', checked: true },
      { name: 'Revistas Estrangeiras', value: 'RE', checked: true },
      { name: 'Eventos', value: 'EV', checked: true },
      { name: 'Livros e Capítulos de Livros', value: 'BK', checked: true },
    ];
    /************************************************************ Fields */
    this.fields = [
      { name: 'Título', value: 'TI', checked: true },
      { name: 'Resumo', value: 'AB', checked: true },
      { name: 'Palavras-chave', value: 'KW', checked: true },
      { name: 'Autor', value: 'AU', checked: true },
      { name: 'Todos os campos', value: 'FL', checked: true },
    ];
    /*********************************************************** BASKET */
    //this.basket = this.localStorageService.get('marked');
    if (this.basket === null) {
      this.basket = [];
    }

    this.selected = this.basket.length;

    /*************************************************************** FILTRO ANO - STAND*/
    this.currentYear = new Date().getFullYear();
    let yearE = this.currentYear + 1;
    let yearS = 1960;
    for (let i = yearS; i <= yearE; i++) {
      this.yearsI.push({ name: i });
    }
    for (let i = yearE; i >= yearS; i--) {
      this.yearsF.push({ name: i });
    }
  }

  public style: string = 'zoomIn';

  alteraStatus(event: Event)
    {
      console.log("====EVENT",event)
      let status = '1'
      this.status = status
    }

  searchForm: FormGroup | any;
  createForm() {
    this.searchForm = this.fb.group({
      term: [this.term, Validators.required],
      year_start: [this.year_start, Validators.required],
      year_end: [this.year_end, Validators.required],
      field: [this.field_search, Validators.required],
      api_version: [this.APIversion, Validators.required],
    });
  }

  keyUp() {
    let term = this.searchForm.value.term;
    if (term.includes(' ')) {
      if (term.includes('"')) {
        this.tips = '';
      } else {
        this.tips = '1';
      }
    } else {
      this.tips = '';
    }
  }

  clickFilters() {
    this.filters = !this.filters;
    if (this.filters) this.style = 'fadeIn show';
    else this.style = 'UP';
  }

  clickadvanceSearch() {
    alert('Em desenvolvimento e testes, aguarde');
    this.router.navigate(['/search-adv']);
  }

  fieldChange(v: string) {
    this.field_search = v;
  }

  onSearch() {
    var map = new Map();
    if (this.searchForm.valid && this.loading == false) {
      this.result = [];
      this.results = [];
      let term = this.searchForm.value.term;

      let fld = this.searchForm.value.fld;

      let dataS = this.searchForm.value.year_start;
      let dataF = this.searchForm.value.year_end;
      let dt: Array<any> | any = {
        di: dataS,
        df: dataF,
        field: this.field_search,
      };

      this.totalw = 0;
      this.tips = '';
      let url = 'brapci/search/v1';
      this.brapciService.api_post(url, dt).subscribe((res) => {
        this.result = res;
        console.log('Estratégia de busca', this.result.words);
        this.results = this.result.works;
        this.works = [];
        let max = 5;
        if (this.results.length == 0) {
          this.notFound = 'True';
        }
        if (this.results.length < max) {
          max = this.results.length;
        }
        for (let i = 0; i < max; i++) {
          this.works.push(this.results[i]);
          this.totalw++;
        }
        this.total = this.result.total;
        this.loading = false;
        this.search = 'T';
      });
    } else {
      console.log('NÃO OK');
    }
    this.loading = true;
  }
  onKeyPress() {}

  ngOnInit() {
    this.createForm();
    this.style = 'noshow';

    this.brapciService.api_post('status').subscribe(
      (res) => {
        this.status_ok = 1;
      },
      (error) => {
        console.log(error);
        this.status_ok = 9;
      }
    );
  }
}
