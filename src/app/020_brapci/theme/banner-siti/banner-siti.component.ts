import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-theme-siti',
  templateUrl: './banner-siti.component.html',
  styleUrl: './banner-siti.component.scss',
})
export class BannerSitiComponent {
  constructor(private router: Router) {}

  logo_site = '/assets/img/logo_siti.png';
  ngOnInit() {}

  goSITE() {
    this.router.navigate(['proceedings/issues/112']);
  }
}
