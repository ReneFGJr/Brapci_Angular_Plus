import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-theme-ebbc',
  templateUrl: './banner-ebbc.component.html'
})
export class BannerEbbcComponent {
  constructor(private router: Router) {}

  logo_ebbc = '/assets/img/logo_ebbc.png';
  logo_ebbc_icone = '/assets/img/logo_benancib.gif';
  ngOnInit() {}

  goEBBC() {
    this.router.navigate(['proceedings/issues/18']);
  }
}
