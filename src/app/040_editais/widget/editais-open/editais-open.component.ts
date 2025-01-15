import { UserService } from 'src/app/010_service/user.service';
import { BrapciService } from './../../../010_service/brapci.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editais-open',
  templateUrl: './editais-open.component.html',
  styleUrl: './editais-open.component.scss',
})
export class EditaisOpenComponent {
  public header: Array<any> | any;
  public user: Array<any> | any;
  public data: Array<any> | any;

  public road: Array<any> | any = {
    home: 'Home',
    editais: 'Editais',
  };

  constructor(
    private userService: UserService,
    private brapciService: BrapciService
  ) {
    this.header = { title: 'Editais Abertos de Agencias de Fomento' };
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    const url = `editais/open`;
    const requestData = {};

    this.brapciService.api_post(url, requestData).subscribe({
      next: (res) => {
        this.data = res || {};
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      },
    });
  }
}
