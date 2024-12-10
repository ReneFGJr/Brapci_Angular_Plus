import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rdf-concept-id',
  templateUrl: './rdf-concept.component.html',
  styleUrl: './rdf-concept.component.scss',
})
export class RdfConceptComponent {
  @Input() public concept: Array<any> | any;

  constructor(
    private router: Router
  ) {}

  goURL(ID: string) {
    if (!ID) {
      console.warn('ID inválido para navegação.');
      return;
    }
    this.router.navigate([`/v/${ID}`]);
  }
}
