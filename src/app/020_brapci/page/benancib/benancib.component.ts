import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-home-benancib',
  templateUrl: './benancib.component.html',
})
export class HomeBenancibComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;
  public total: number = 0;

  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = { title: 'Benancib' };
  }

  updateTotal($Event:number) {
    this.total = $Event;
  }
}
