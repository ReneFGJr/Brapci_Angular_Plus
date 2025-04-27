import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-rdf-form',
  templateUrl: './rdf-form.component.html',
})
export class RdfFormComponent {
  @Input() public data: Array<any> | any;
  @Input() public field: Array<any> | any;
  @Input() public id: string = '';

  ngOnInit() {

  }
}
