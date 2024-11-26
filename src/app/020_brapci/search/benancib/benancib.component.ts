import { BrapciService } from './../../../010_service/brapci.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-benancib',
  templateUrl: './benancib.component.html',
  styleUrl: './benancib.component.scss',
})
export class BenancibSearchComponent {
  searchForm: FormGroup | any;
  results: any[] = [];
  submitted = false;
  public total: number = 0;
  public result: Array<any> | any;
  public totalw: number = 0;
  public loading: boolean = false;
  public notFound: boolean = false;
  public tips: string = '';
  public works: Array<any> | any;
  public search: string = '';
  public APIversion: string = '3';
  public yearsI: Array<any> = [];
  public yearsF: Array<any> = [];
  public currentYear: number = 0;
  public year_start: number = 1962;
  public year_end: number = new Date().getFullYear() + 1;

  gtList = [
    { id: 1, name: 'GT 1 - Bibliometria' },
    { id: 2, name: 'GT 2 - Organização do Conhecimento' },
    // Adicione mais GTs conforme necessário
  ];
  typeList = ['Artigo', 'Resumo', 'Pôster'];

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {}

  createForm() {
    this.searchForm = this.fb.group({
      term: ['', Validators.required],
      gtNumber: [''],
      type: [''],
      journal: [75, Validators.required],
      api_version: [this.APIversion, Validators.required],
      offset: [1000],
      year_start: [this.year_start, Validators.required],
      year_end: [this.year_end, Validators.required],
    });
  }

  ngOnInit() {
    this.createForm();

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

  onSearch() {
    var map = new Map();
    if (this.searchForm.valid && this.loading == false) {
      this.result = [];
      this.results = [];

      let dt = this.searchForm.value;

      this.totalw = 0;
      this.tips = '';
      let url = 'brapci/search/v' + this.APIversion;
      this.brapciService.api_post(url, dt).subscribe((res) => {
        this.result = res;
        console.log(dt);
        console.log(res);
        console.log('Estratégia de busca', this.result.words);
        this.results = this.result.works;
        this.works = [];
        let max = 5;
        if (this.results.length == 0) {
          this.notFound = true;
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
}
