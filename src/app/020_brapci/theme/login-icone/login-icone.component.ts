import { Component, Input } from '@angular/core';
import { UserService } from '../../../010_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-icone',
  templateUrl: './login-icone.component.html'
})
export class LoginIconeComponent {
  @Input() public user: Array<any> | any;
  //  public user:Array<any> | any

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.router.navigate(['/social/signin']);
  }

  perfil() {
    this.router.navigate(['/social/perfil']);
  }
}
