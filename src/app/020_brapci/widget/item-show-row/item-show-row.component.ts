import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../010_service/local-storage.service';

@Component({
    standalone: false,
    selector: 'app-item-show-row',
  templateUrl: './item-show-row.component.html',
})
export class ItemShowRowComponent {
  @Input() public results: Array<any> | any;
  @Input() public result: Array<any> | any;
  @Input() public searchAction: string = '';

  public APIversion: string = '1';
  public loading: boolean = false;
  public loaging_img: string = '/assets/img/loading.svg';
  public class_filter: string = '';
  private basket: Array<any> = [];
  public marked: FormGroup;

  /******************************************************* Constructor */
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService
  ) {
    this.marked = this.fb.group({});
    this.selected = this.basket.length;

    /*********************************************************** MARKED */
    this.marked = this.fb.group({
      website: this.fb.array([], [Validators.required]),
    });

    /*********************************************************** BASKET */
    //this.basket = this.localStorageService.get('marked');
    if (this.basket === null) {
      this.basket = [];
    }

    this.selected = this.basket.length;
  }

  public selected: number = 0;
  public works: Array<any> | any;
  public totalw: number = 0;
  public total: number = 0;
  public filters: boolean = false;
  public advanceSearch: string = '';
  public term: string = '';

  /********************** Tradução */
  public msg_data_mark: string = 'Selecionar item para biblioteca pessoal';
  public msg_cover: string = 'Capa da publicação';
  public msg_noresult: string = 'Nenhum resultado encontrado!';
  public msg_result: string = 'resultado(s)';
  public msg_show: string = 'Mostrando';
  public msg_of: string = 'de';

  // Exemplo: Configurações para rótulos dinâmicos por tipo
  typeLabels: { [key: string]: string } = {
    Article: 'Artigo',
    Proceeding: 'Trabalho em Evento',
    Book: 'Livro',
    BookChapter: 'Capítulo de Livro',
  };

  // Obtém o rótulo do tipo
  getTypeLabel(type: string): string {
    return this.typeLabels[type] || 'Outro';
  }

  // Obtém o título para a imagem de capa
  getCoverTitle(items: any): string {
    return `${this.msg_cover}: ${items.data.ldl_legend || items.data.TITLE}`;
  }

  ngOnChanges() {
    this.works = [];
    let max = 5;
    this.totalw = 0;
    if (this.results.length < max) {
      max = this.results.length;
    }

    for (let i = 0; i < max; i++) {
      this.works.push(this.results[i]);
      this.totalw++;
    }
  }

  ngOnInit() {
    this.total = this.results.length;
  }

  selectAll() {
    alert('Select All');
    let works = this.result;
    //this.basket = this.localStorageService.get('marked');

    for (var i = 0; i < works.length; i++) {
      let idx = works[i]['id'];
    }

    this.selected = this.basket.length;

    //this.localStorageService.set('marked', wb.value);
  }

  /**************************** MARK */
  markDOwn(e: any) {
    let id = 'mk' + e;
    let checkbox = document.getElementById(id) as HTMLInputElement | null;

    const wb: FormArray = this.marked.get('website') as FormArray;

    if (e.target.checked) {
      /********* Verifica se existe */
      const index = wb.controls.findIndex((x) => x.value === e.target.value);
      if (index > 0) {
      } else {
        wb.push(new FormControl(e.target.value));
      }
    } else {
      const index = wb.controls.findIndex((x) => x.value === e.target.value);
      wb.removeAt(index);
    }
    this.localStorageService.set('marked', wb.value);
    this.basket = wb.value;
    this.selected = this.basket.length;
  }

  updateBasket(e: Event) {
    let it = this.basket;
    const wb: FormArray = this.marked.get('website') as FormArray;

    if (it != null) {
      it.map((idx: string) => {
        let xid = wb.controls.findIndex((x) => x.value === idx);
        wb.removeAt(xid);
      });
    }

    it.map((idx: string) => {
      let id = 'mk' + idx;
      let checkbox = document.getElementById(id) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    });

    this.basket = [];
    this.localStorageService.remove('mark');
    this.selected = 0;
  }

  checked(id: string) {
    if (this.basket.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  /**************************** SCROLL */
  onScrollDown(ev: any) {
    let max = 1;
    let ini: number = this.totalw;
    let fim: number = ini + max;
    let tot: number = this.results.length;
    if (fim > tot) {
      fim = tot;
    }

    //console.log('Scrool', ini, fim, tot);

    for (let i = ini; i < fim; i++) {
      this.works.push(this.results[i]);
      this.totalw++;
    }
  }

  onScrollUp(ev: any) {}

  onKeyPress() {}
}
