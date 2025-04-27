import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-home-pq',
  templateUrl: './home-pq.component.html',
  styleUrl: './home-pq.component.scss',
})
export class HomePqComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;

  OnNgInit() {}
  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = { title: 'Pesquisadores PQ do CNPq' };
  }
}
