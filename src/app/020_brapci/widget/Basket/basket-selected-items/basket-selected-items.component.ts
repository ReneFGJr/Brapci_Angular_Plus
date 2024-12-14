import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
  selector: 'app-basket-selected-items',
  templateUrl: './basket-selected-items.component.html'
})
export class BasketSelectedItemsComponent {
  public basket: Array<any> | any;
  public row: Array<any> | any;
  public total: number = 0;
  public header: Array<any> | any = 'Lista de Referências';
  public edit: string = '';

  constructor(
    private localStorageService: LocalStorageService,
    private brapciService: BrapciService
  ) {}

  ngOnInit() {
    this.basket = this.localStorageService.get('marked');

    if (this.basket == null) {
      this.basket = [];
    }

    this.total = this.basket.length;

    if (this.total > 0) {
      this.brapciService.basket(this.basket).subscribe((res) => {
        this.row = res;
      });
    }
  }
}
