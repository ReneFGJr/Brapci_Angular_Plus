import { Component } from '@angular/core';
import { UserService } from '../../../../010_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-perfil',
  templateUrl: './perfil.component.html'
})
export class SocialPerfilComponent {
  public user: Array<any> | any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
