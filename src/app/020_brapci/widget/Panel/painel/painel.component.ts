import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
    standalone: false,
    selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss',
})
export class PainelComponent {
  public header = { title: 'Painel de Análise de Dados' };
  public basket: Array<any> | any;
  public row: Array<any> | any;
  public total: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private brapciService: BrapciService
  ) {}

  ngOnInit() {
    this.basket = this.localStorageService.get('marked');
    let URL = 'brapci/analysis';
    if (this.basket == null) {
      this.basket = [];
    }
    let total = this.basket.length;

    const dt = {
      worksID: this.basket,
    };

    console.log('OK');

    if (total > 0) {
      this.brapciService.api_post(URL, dt).subscribe((res) => {
        this.row = res;
        console.log(this.row);
      });
    }
  }

//  exportarCSV(data: Array<any> = []): void {
//    this.brapciService.exportToCSV(data, 'dados_brapci.csv');
//  }

  exportarCSV(data: Array<any> = []): void {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:T]/g, '-').split('.')[0]; // Formato: YYYYMMDDHHMMSS
    const fileName = `dados_brapci_${timestamp}.csv`;

    this.brapciService.exportToCSV(data, fileName);
  }
}
