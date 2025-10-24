import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { UserService } from 'src/app/010_service/user.service';

@Component({
  selector: 'app-callback',
  standalone: false,
  templateUrl: './callback.html'
})
export class Callback {
  public action: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private brapciService: BrapciService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit()
  {
    console.log('Callback Oauth');
    // Escuta mudanças na URL e atualiza o ID
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.action = params.get('api');
        console.log('Action: ', this.action);
      })
  }

}
