import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-doc-api',
  templateUrl: './doc-api.component.html'
})
export class DocApiComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;

  OnNgInit() {}
  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = { title: 'Documentação Brapci' };
  }
}
