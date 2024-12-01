import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() public data:Array<any> | any
}
