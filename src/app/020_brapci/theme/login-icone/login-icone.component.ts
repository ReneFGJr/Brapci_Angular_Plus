import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-login-icone',
  templateUrl: './login-icone.component.html'
})
export class LoginIconeComponent {
  @Input() public user: Array<any> | any;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/social/signin']);
  }

  perfil() {
    this.router.navigate(['/social/perfil']);
  }
}
