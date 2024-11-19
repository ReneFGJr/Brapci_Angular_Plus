import { Component } from '@angular/core';

@Component({
  selector: 'app-home-benancib',
  templateUrl: './benancib.component.html',
})
export class HomeBenancibComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;

  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = {title: 'Benancib'}
  }
}
