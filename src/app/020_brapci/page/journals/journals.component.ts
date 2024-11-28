import { BrapciService } from '../../../010_service/brapci.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrl: './journals.component.scss',
})
export class JournalsComponent {
  public page: string = '1';
  public journals: Array<any> | any;
  public header: { title: string } = { title: 'Brapci Revistas Indexadas' };
  constructor(private brapciService: BrapciService) {}

  selectPG(pg: string) {
    this.page = pg;
  }

  ngOnInit() {
    let url = 'brapci/source/journal';
    this.brapciService.api_post(url).subscribe((res) => {
      console.log(res);
      this.journals = res;
    });
  }
}
