import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
})
export class Error404Component {
  public header: { title: string };
  public originalUrl: string = ''; // Armazena a URL original

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.header = { title: 'Erro 404 - Página não encontrada' };

    // Capturar a URL original do resolver
    this.activatedRoute.data.subscribe((data) => {
      this.originalUrl = data['originalUrl'] || 'URL desconhecida';
    });
  }

  goHome() {
    // Redireciona para a página inicial
    this.router.navigate(['/']);
  }
}
