import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-banner-livros',
  templateUrl: './banner-livros.component.html',
  styleUrl: './banner-livros.component.scss',
})
export class BannerLivrosComponent {
  logo = '/assets/img/logo_brapci_livros.png';
}
