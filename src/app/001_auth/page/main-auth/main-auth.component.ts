import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthORCIDService } from 'src/app/010_service/auth-orcid.service';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { UserService } from 'src/app/010_service/user.service';

@Component({
  selector: 'app-main-auth',
  templateUrl: './main-auth.component.html',
})
export class MainAuthComponent {
  action: string | null = null;
  data: any = null;
  header: any = null;
  private subscription: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private brapciService: BrapciService,
    private userService: UserService,
    private router: Router,
    private authORCIDService: AuthORCIDService
  ) {
    this.header = { title: 'Ferramentas Bibliográficas' };
  }

  OrcIDLogin() {
    this.authORCIDService.login();
  }
  ngOnInit(): void {
    // Escuta mudanças na URL e atualiza o ID
    this.subscription.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.action = params.get('action');
        if (this.action) {
          if (this.action == 'logout') {
            // ************** LOGOUT **************
            this.userService.logout();
            this.router.navigate(['/']);
          } else {
          }
        }
      })
    );
  }
}
