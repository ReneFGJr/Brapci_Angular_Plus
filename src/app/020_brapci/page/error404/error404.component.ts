import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
})
export class Error404Component {
  public header: Array<any> | any;
  constructor(private router: Router) {
    this.header = { title: 'Erro 404 - Página não localizada' };
  }

  goHome() {
    this.router.navigate(['/']); // Redireciona para a página inicial
  }
}
