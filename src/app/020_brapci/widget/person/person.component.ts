import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonRowComponent {
  @Input() public lista: Array<any> | any;
}
