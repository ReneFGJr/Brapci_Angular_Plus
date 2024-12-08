import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-icone-ia',
  templateUrl: './admin-icone-ia.component.html',
  styleUrl: './admin-icone-ia.component.scss',
})
export class AdminIconeIaComponent {
  @Input() ID: string = '';
  public userID: Array<any> | any = null;
}
