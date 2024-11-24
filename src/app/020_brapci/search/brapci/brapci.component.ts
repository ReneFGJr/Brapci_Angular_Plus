import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from '../../../010_service/brapci.service';
import { LocalStorageService } from '../../../010_service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-brapci',
  templateUrl: './brapci.component.html',
  styleUrl: './brapci.component.scss',
})
export class BrapciSearchComponent {
  public selected: number = 0;
  public works: Array<any> | any;
  public totalw: number = 0;
  public total: number = 0;
  public result: Array<any> | any;
  public results: Array<any> = [];
  // Filter
  /************************************************************ Collection */
  public list: Array<any> = [
    { name: 'Revistas Brasileiras', value: 'RA', checked: true },
    { name: 'Revistas Estrangeiras', value: 'RE', checked: true },
    { name: 'Eventos', value: 'EV', checked: true },
    { name: 'Livros e Capítulos de Livros', value: 'BK', checked: true },
  ];
  public fields: Array<any> = [
    { name: 'Título', value: 'TI', checked: true },
    { name: 'Resumo', value: 'AB', checked: true },
    { name: 'Palavras-chave', value: 'KW', checked: true },
    { name: 'Autor', value: 'AU', checked: true },
    { name: 'Todos os campos', value: 'FL', checked: true },
  ];

  filters: boolean = false; // Indica se os filtros estão visíveis
  isTransitioning: boolean = false; // Indica se a transição está ocorrendo

  toggleFilters(): void {
    this.filters = !this.filters;
  }

  public advanceSearch: string = '';
  public term: string = '';
  public year_start: number = 1962;
  public year_end: number = new Date().getFullYear() + 1;
  public APIversion: string = '1';
  public loading: boolean = false;
  public loadingImg: string = '/assets/img/loading.svg';
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
  public currentYear: number = 0;
  public terms: string = '';

  public tips: string = '';
  public search: string = '';

  public style: string = 'zoomIn';

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

  ngOnInit() {
    this.createForm();
  }

  onSearch() {}

  clickAdvanceSearch() {}

  keyUp() {}

  fieldChange(id: string) {}

  /***************** Formulario */
  field_search: string = 'FL';
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
}
