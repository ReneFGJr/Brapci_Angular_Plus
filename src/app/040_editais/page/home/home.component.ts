import { Component } from '@angular/core';

@Component({
  selector: 'app-editais-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeEdiatisComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;

  OnNgInit()
    {

    }
  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = { title: 'Editais de Agencias de Fomento' };
  }
}
