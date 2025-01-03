import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-feisc',
  templateUrl: './banner-feisc.component.html'
})
export class BannerFeiscComponent {
  constructor(private router: Router) {}

  logo_site = '/assets/img/logo_feisc.png';
  ngOnInit() {}

  goSITE() {
    this.router.navigate(['proceedings/issues/113']);
  }
}
