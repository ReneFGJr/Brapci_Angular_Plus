import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  @Input() public data: Array<any> | any;

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  goUrl(route:string)
    {
      window.location.href = route;
    }
}
