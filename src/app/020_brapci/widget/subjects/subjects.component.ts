import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  @Input() public data:Array<any> | any
}
