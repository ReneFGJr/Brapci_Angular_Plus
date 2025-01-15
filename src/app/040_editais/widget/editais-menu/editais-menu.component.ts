import { Component } from '@angular/core';

@Component({
  selector: 'app-editais-menu',
  templateUrl: './editais-menu.component.html',
  styleUrl: './editais-menu.component.scss',
})
export class EditaisMenuComponent {
  public road: Array<any> | any =  {
    home: 'Home',
  };
  openEditais() {
    // Add your code here
  }
}
