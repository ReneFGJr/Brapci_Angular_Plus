import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rdf-concept-id',
  templateUrl: './rdf-concept.component.html',
  styleUrl: './rdf-concept.component.scss'
})
export class RdfConceptComponent {
  @Input() public concept:Array<any> | any
}
