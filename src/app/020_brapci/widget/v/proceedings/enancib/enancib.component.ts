import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-enancib',
  templateUrl: './enancib.component.html',
  styleUrl: './enancib.component.scss',
})
export class EnancibComponent {
  @Input() public data: Array<any> | any;
}
