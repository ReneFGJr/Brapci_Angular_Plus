import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-geral',
  templateUrl: './geral.component.html',
  styleUrl: './geral.component.scss'
})
export class GeralComponent {
  @Input() public data: Array<any> | any;
}
