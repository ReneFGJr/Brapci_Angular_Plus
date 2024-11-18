import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-ia',
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss'
})
export class IaComponent {
  @Input() public ID:string = ''
}
