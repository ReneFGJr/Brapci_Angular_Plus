import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rdf-class',
  templateUrl: './rdf-class.component.html',
  styleUrl: './rdf-class.component.scss',
})
export class RdfClassComponent {
  @Input() public concept: Array<any> | any;
}
