import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
    standalone: false,
    selector: 'app-search-boolean',
  templateUrl: './search-boolean.component.html',
  styleUrls: ['./search-boolean.component.scss'],
})
export class SearchBooleanComponent {
  @Output() status = new EventEmitter();
  public selected: number = 0;
  public errors: Array<any> = [];
  public errorMessage: string = '';
  public works: Array<any> = [];
  public worksID: Array<any> = [];
  public totalw: number = 0;
  public total: number = 0;
  public result: any = null;
  public results: Array<any> = [];
  public APIversion: string = '1';

  public loading: boolean = false;
  public notFound: boolean = false;
  public loadingImg: string = '/assets/img/loading.svg';
  public tips: string = '';
  public search: string = '';

  form: FormGroup;
  public header = {
    title: 'Busca Avançada - Base de Dados em Ciência da Informação',
  };

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {
    this.form = this.fb.group({
      terms: this.fb.array([], Validators.required),
      strategy: [''],
    });
    this.addTerm();
  }

  // Getter para o FormArray
  get terms(): FormArray {
    return this.form.get('terms') as FormArray;
  }

  buscaTextArea(q: string = '') {
    this.loading = true;
    this.notFound = false;
    this.result = [];
    this.results = [];
    this.worksID = [];
    this.works = [];
    this.totalw = 0;
    q = this.form.value.strategy;

    const searchPayload = { q: q, version: 'a1' };
    const url = `brapci/search/a${this.APIversion}`;
    console.log('Busca 2', searchPayload);

    this.brapciService
      .api_post(url, searchPayload)
      .pipe(
        catchError((error) => {
          this.loading = false;
          console.error('Erro na busca:', error);
          this.errors = error;
          this.errorMessage = error.error.text || 'Erro desconhecido';
          this.notFound = true;
          return EMPTY;
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        this.result = res;
        this.errorMessage = this.result?.erroMsg;
        this.results = this.result?.works || [];
        this.worksID = this.results.map((work: any) => work.id);
        this.works = this.results.slice(0, 5);
        this.totalw = this.works.length;
        this.total = this.result.total || 0;
        this.loading = false;
        this.notFound = this.results.length === 0;
        this.status.emit('1');
      });
  }

  onSearch() {
    if (this.terms.invalid || this.loading) {
      console.error('Por favor, insira ao menos um termo válido.');
      return;
    }

    this.loading = true;
    this.notFound = false;
    this.result = [];
    this.results = [];
    this.worksID = [];
    this.works = [];
    this.totalw = 0;

    this.tips = this.generateQuery();
    this.form.patchValue({ strategy: this.tips });

    const searchPayload = { q: this.tips, version: 'a1' };
    const url = `brapci/search/a${this.APIversion}`;
    console.log('Busca', searchPayload);

    this.brapciService
      .api_post(url, searchPayload)
      .pipe(
        catchError((error) => {
          this.loading = false;
          console.error('Erro na busca:', error);
          this.notFound = true;
          return EMPTY;
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        this.result = res;
        this.results = this.result?.works || [];
        this.worksID = this.results.map((work: any) => work.id);
        this.works = this.results.slice(0, 5);
        this.totalw = this.works.length;
        this.total = this.result.total || 0;
        this.loading = false;
        this.notFound = this.results.length === 0;
        this.status.emit('1');
      });
  }

  onTextAreaInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    const updatedText = textarea.value
      .replace(/\band\b/g, 'AND') // Substitui "and" por "AND"
      .replace(/\bor\b/g, 'OR') // Substitui "or" por "OR"
      .replace(/\bnot\b/g, 'NOT'); // Substitui "not" por "NOT"

    // Atualiza o valor do textarea e do FormControl
    textarea.value = updatedText;
    this.form.get('strategy')?.setValue(updatedText);
  }

  // Gera a string no formato esperado
  generateQuery(): string {
    const formValues = this.terms.value;
    if (formValues.length === 0) return '';

    // Garante que todos os termos sejam formatados adequadamente
    return formValues
      .filter((item: { term: string }) => item.term?.trim() !== '') // Ignora termos vazios
      .map((item: { term: string; operator: string }, index: number) => {
        const prefix = index > 0 ? ` ${item.operator} ` : ''; // Adiciona o operador apenas se não for o primeiro termo
        return `${prefix}"${item.term.trim()}"`; // Termos são sempre entre aspas
      })
      .join('');
  }

  // Adicionar um novo termo
  addTerm() {
    const termGroup = this.fb.group({
      term: ['', Validators.required],
      operator: ['AND'],
    });
    this.terms.push(termGroup);
  }

  // Remover um termo pelo índice
  removeTerm(index: number) {
    this.terms.removeAt(index);
  }

  // TrackBy para melhorar desempenho em *ngFor
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
