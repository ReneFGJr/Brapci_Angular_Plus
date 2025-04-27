import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-button-ia',
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss'
})
export class IaComponent {
  @Input() public ID:string = ''
}
