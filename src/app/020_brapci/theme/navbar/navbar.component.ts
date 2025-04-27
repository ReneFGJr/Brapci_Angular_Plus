import { Component } from '@angular/core';
import { UserService } from '../../../010_service/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    standalone: false,
    selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public event: any | any;
  public fixed: number = 1;
  public navbarClass = '';
  public pos: number = 0;
  public user: Array<any> | any;
  public logo: string = '/assets/img/brand_brapci_shadown.png';
  public URLhome: string = environment.Url + 'home';

  constructor(private userService: UserService, private router: Router) {
    document.addEventListener('click', (clickEvent: MouseEvent) => {
      this.fixed = 1;
      this.navbarClass = 'slideOutUp';
    });

    document.addEventListener('scroll', (scr: any) => {
      //console.log(document.documentElement.scrollTop);

      /* Troca do Menu superior */
      let posScreen = document.documentElement.scrollTop;
      this.pos = posScreen;

      if (posScreen > 0) {
        if (posScreen > 100) {
          this.fixed = 2;
          this.navbarClass = 'slideInDown';
        } else {
          if (this.fixed > 0) {
            this.navbarClass = 'slideOutUp';
          }
        }
      } else {
        this.fixed == 0;
      }
    });
  }

  onScroll(): void {
    //console.log(document.documentElement.scrollTop);
  }

  ngOnInit() {
    this.pos = 0;
    this.fixed = 0;

    this.user = this.userService.getUser();
  }

  goURL(URL: string) {
    this.router.navigate([URL]);
  }
}
