import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-citation-note',
  templateUrl: './citation-note.component.html',
  styleUrl: './citation-note.component.scss',
})
export class CitationNoteComponent {
  @Input() public citacao: Array<any> | any;
}
