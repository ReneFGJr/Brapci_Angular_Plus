import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    standalone: false,
    selector: 'app-main-admin-menu',
  templateUrl: './main-admin-menu.component.html',
})
export class MainAdminMenuComponent {
  public header = { title: '[ADMIN] - Base de Dados em Ciência da Informação' };
  action: string | null = null;
  data: any = null;
  id: string = '';
  private subscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = '';
  }
  ngOnInit(): void {
    // Escuta mudanças na URL e atualiza o ID
    this.subscription.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.action = params.get('action')
        this.id = params.get('id') || ''
      })
    );
  }
}
