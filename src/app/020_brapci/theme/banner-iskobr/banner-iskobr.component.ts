import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-theme-iskobr',
  templateUrl: './banner-iskobr.component.html',
})
export class BannerIskobrComponent {
  constructor(private router: Router) {}

  logo_iskobr = '/assets/img/logo_iskobr.png';
  ngOnInit() {}

  goISKOBR() {
    this.router.navigate(['proceedings/issues/84']);
  }
}
