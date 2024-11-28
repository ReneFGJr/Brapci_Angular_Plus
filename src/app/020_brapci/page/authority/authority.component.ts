import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { UserService } from 'src/app/010_service/user.service';

@Component({
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
    private BrapciService: BrapciService
  ) {}

  searchItens(term: string, type: string) {
    this.BrapciService.searchList(term, type).subscribe((res) => {
      this.items = res;
      this.nomes = this.items.data.item;
      this.corporate = this.items.data.corporate;
    });
  }
}
