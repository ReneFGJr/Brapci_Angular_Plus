import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-basket-selected',
  templateUrl: './basket-selected.component.html',
})
export class BasketSelectedComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;

  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = { title: 'Fontes seleciondas' };
  }
}
