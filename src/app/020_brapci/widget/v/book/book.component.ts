import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() public data:Array<any> | any
}
