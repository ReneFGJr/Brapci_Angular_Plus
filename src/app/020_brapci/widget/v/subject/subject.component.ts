import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-v-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent {
  @Input() public data: Array<any> | any;
}
