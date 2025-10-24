import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss',
  standalone: false,
})
export class SearchBookComponent {
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

  typeList = [
    { id: 'BK', name: 'Livro' },
    { id: 'BC', name: 'Capítulo' },
  ];

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {}

  createForm() {
    this.searchForm = this.fb.group({
      term: ['', Validators.required],
      collection: ['BK'],
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
      console.log('Busca');
      console.log(dt);
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
