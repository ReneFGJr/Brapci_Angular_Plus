import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rdf-header',
  templateUrl: './rdf-header.component.html',
  styleUrl: './rdf-header.component.scss'
})
export class RdfHeaderComponent {
  @Input() public concept:Array<any> | any
}
