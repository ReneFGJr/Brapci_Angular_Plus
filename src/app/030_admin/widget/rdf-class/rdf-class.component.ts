import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-rdf-class',
  templateUrl: './rdf-class.component.html'
})
export class RdfClassComponent {
  @Input() public concept: Array<any> | any;
}
