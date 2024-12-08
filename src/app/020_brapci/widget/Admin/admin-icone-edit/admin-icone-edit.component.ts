import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-icone-edit',
  templateUrl: './admin-icone-edit.component.html',
  styleUrl: './admin-icone-edit.component.scss',
})
export class AdminIconeEditComponent {
  @Input() ID: string = '';
  public userID: Array<any> | any = null;
}
