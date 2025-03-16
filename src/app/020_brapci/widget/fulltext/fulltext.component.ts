import { BrapciService } from 'src/app/010_service/brapci.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fulltext',
  templateUrl: './fulltext.component.html',
  styleUrl: './fulltext.component.scss',
})
export class FulltextComponent {
  @Input() public ID: string = '';
  data: any = null

  constructor(private brapciService: BrapciService) {}
  ngOnInit() {
    const url = `brapci/getText/${this.ID}`;
    const requestData = {};

    console.log('ID', this.ID);
    //** https://cip.brapci.inf.br/api/brapci/getText/6949
    this.brapciService.api_post(url, requestData).subscribe({
      next: (res) => {
        this.data = res || {};
        console.log(this.data);
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      },
    });
  }
}
