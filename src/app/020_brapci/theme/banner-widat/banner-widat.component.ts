import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-theme-widat',
  templateUrl: './banner-widat.component.html',
})
export class BannerWidatComponent {
  constructor(private router: Router) {}

  logo_iskobr = '/assets/img/logo_widat.png';
  ngOnInit() {}

  goSITE() {
    this.router.navigate(['proceedings/issues/104']);
  }
}
