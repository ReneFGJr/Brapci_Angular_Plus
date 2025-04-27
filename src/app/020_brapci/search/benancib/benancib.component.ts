import { BrapciService } from './../../../010_service/brapci.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    standalone: false,
    selector: 'app-search-benancib',
  templateUrl: './benancib.component.html',
  styleUrl: './benancib.component.scss',
})
export class BenancibSearchComponent {
  @Output() public totalX = new EventEmitter<number>();
  searchForm: FormGroup | any;
  results: any[] = [];
  submitted = false;
  public worksID: Array<any> = [];
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
  public OffSet: number = 1000;

  gtList = [
    { id: 311937, name: 'GT 1' },
    { id: 311939, name: 'GT 2' },
    { id: 311955, name: 'GT 3' },
    { id: 311938, name: 'GT 4' },
    { id: 311936, name: 'GT 5' },
    { id: 311935, name: 'GT 6' },
    { id: 311940, name: 'GT 7' },
    { id: 311932, name: 'GT 8' },
    { id: 311942, name: 'GT 9' },
    { id: 311930, name: 'GT 10' },
    { id: 311941, name: 'GT 11' },
    { id: 311931, name: 'GT 12' },
    // Adicione mais GTs conforme necessário
  ];
  typeList = [
      {id: 215973, name: 'Trabalho Completo'},
      {id: 106596, name: 'Resumo Expandido'},
      {id: 106595, name: 'Pôster'}
    ]

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {}

  createForm() {
    this.searchForm = this.fb.group({
      term: ['', Validators.required],
      gtNumber: [''],
      type: [''],
      journal: [75, Validators.required],
      api_version: [this.APIversion, Validators.required],
      offset: [this.OffSet],
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
      this.worksID = [];

      let dt = this.searchForm.value;
      this.totalw = 0;
      this.tips = '';
      let url = 'brapci/search/v' + this.APIversion;
      this.brapciService.api_post(url, dt).subscribe((res) => {
        this.result = res;
        this.results = this.result.works;
        this.totalX.emit(this.results.length);
        this.works = [];
        this.worksID = [];
        let max = 5;
        if (this.results.length == 0) {
          this.notFound = true;
        }
        for (let i = 0; i < this.results.length; i++) {
          this.worksID.push(this.results[i].id);
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
