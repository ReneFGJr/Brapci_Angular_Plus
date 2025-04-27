import { BrapciService } from './../../../../010_service/brapci.service';
import { Component } from '@angular/core';
import { UserService } from '../../../../010_service/user.service';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-social-perfil',
  templateUrl: './perfil.component.html',
})
export class SocialPerfilComponent {
  public user: Array<any> | any;
  public data: Array<any> | any;
  constructor(
    private userService: UserService,
    private router: Router,
    private brapciService: BrapciService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    const url = `brapci/activities`;
    const requestData = {};

    console.log('===ACT==');

    this.brapciService.api_post(url, requestData).subscribe({
      next: (res) => {
        this.data = res || {};
        console.log('==Dados==>', this.data);
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      },
    });
  }

  goUrl(route: string) {
    window.location.href = route;
  }
}
