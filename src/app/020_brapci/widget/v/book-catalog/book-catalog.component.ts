import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-book-index-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrl: './book-catalog.component.scss'
})
export class BookCatalogIndexComponent {
  @Input() data: Array<any> | any;

}
