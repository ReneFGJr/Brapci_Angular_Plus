import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-main-admin-v',
  templateUrl: './main-admin-v.component.html',
  styleUrl: './main-admin-v.component.scss',
})
export class MainAdminVComponent {
  public bool_subject: boolean = false;

  public header = { title: '[ADMIN] - Base de Dados em Ciência da Informação' };
  action: string | null = null;
  data: any = null;
  id: string = '';
  private subscription: Subscription = new Subscription();
  constructor(
    private brapciService: BrapciService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = '';
  }

  onIAauthors()
    {

    }

  ngOnInit(): void {
    // Escuta mudanças na URL e atualiza o ID
    this.subscription.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.action = params.get('action');
        this.id = params.get('id') || '';
        this.brapciService
          // https://cip.brapci.inf.br/api/brapci/get/v1/173664
          .api_post('brapci/get/v1/' + this.id)
          .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            //Subject
              if (this.data.subject && this.data.subject?.pt.length > 0) {
                this.bool_subject = true;
              }

          });
      })
    );
  }
}
