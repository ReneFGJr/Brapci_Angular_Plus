import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-theme-benancib',
  templateUrl: './benancib.component.html'
})
export class BenancibComponent {

  constructor(private router: Router) {}

  logo_benancib = '/assets/img/logo_benancib.png';
  logo_benancib_icone = '/assets/img/logo_benancib.gif';
  ngOnInit() {}

  goBenancib() {
    this.router.navigate(['/benancib']);
  }
}
