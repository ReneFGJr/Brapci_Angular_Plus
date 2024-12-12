import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-admin-rdf-edit',
  templateUrl: './main-admin-rdf-edit.component.html'
})
export class MainAdminRdfEditComponent implements OnInit {
  @Input() public id: string = '' // Aceita null e string
  public type: string = 'NA';
  public data: any = null;
  public group: any = null;
  public sub: any = null;
  public chaves: any = null;
  public header = { title: 'Brapci' };

  constructor(
    private brapciService: BrapciService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.id) {
      console.error('ID não fornecido!');
      return;
    }

    const url = `rdf/a/${this.id}`;
    this.brapciService.api_post(url).subscribe({
      next: (res) => {
        this.data = res;
        this.group = this.data?.groups || [];
        console.log(this.data);
      },
      error: (err) => {
        console.error('Erro ao buscar dados:', err);
      },
    });
  }

  goURL(ID: string) {
    if (!ID) {
      console.warn('ID inválido para navegação.');
      return;
    }
    this.router.navigate([`/v/${ID}`]);
  }

  delete(id: number) {
    if (!id) {
      console.warn('ID inválido para exclusão.');
      return;
    }

    const url = `${environment.path}/#/popup/rdf/delete/${id}/del`;
    const windowFeatures =
      'toolbar=no, menubar=no, width=800, height=430, top=100, left=100';
    window.open(url, '_blank', windowFeatures);
  }

  popup(id: number, prop: string) {
    if (!id || !prop) {
      console.warn('ID ou propriedade inválida para popup.');
      return;
    }

    const url = `https://brapci.inf.br/#/popup/rdf/add/${id}/${prop}`;
    const windowFeatures =
      'toolbar=no, menubar=no, width=800, height=430, top=100, left=100';
    window.open(url, '_blank', windowFeatures);
  }
}
