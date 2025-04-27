import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-admin-icone-edit',
  templateUrl: './admin-icone-edit.component.html'
})
export class AdminIconeEditComponent {
  @Input() ID: string = '';
  public userID: Array<any> | any = null;

  constructor(private router: Router) {}

  goURL(ID: string) {
    if (!ID) {
      console.warn('ID inválido para navegação.');
      return;
    }
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/admin/a/${ID}`])
    );
    window.open(url, '_blank');
  }
}
