import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrl: './search-index.component.scss'
})
export class SearchIndexComponent {
  @Input() public filters:Array<any> | any = []
}
