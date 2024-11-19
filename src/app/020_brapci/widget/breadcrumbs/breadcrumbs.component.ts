import { Component, Input } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {
  @Input() public data:Array<any> | any
}
