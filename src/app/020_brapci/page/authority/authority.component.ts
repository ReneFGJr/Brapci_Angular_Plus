import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { UserService } from 'src/app/010_service/user.service';

@Component({
    standalone: false,
    selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrl: './authority.component.scss',
})
export class AuthorityComponent {
  public header = { title: 'Busca por Pontos de Acesso | Autoridades ' };
  public data: Array<any> | any;

  public items: Array<any> | any;
  public nomes: Array<any> | any;
  public corporate: Array<any> | any;
  public total: number = 0;
  public pag: number = 0;

  constructor(
    private userService: UserService,
    private brapciService: BrapciService
  ) {}

  receberAtualizacao(evento: any[]) {
    this.data = evento;
  }
}
