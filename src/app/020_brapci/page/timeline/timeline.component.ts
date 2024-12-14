import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  public type: string = 'NA';
  public data: Array<any> | any;
  public sub: Array<any> | any;
  public chaves: Array<any> | any;
  public id: number = 0;
  public header = { title: 'Timeline - Revistas' };

  constructor(private brapciService: BrapciService) {}
  ngOnInit() {
    this.brapciService.api_post('brapci/timeline/2').subscribe((res) => {
      this.data = res;
    });
  }
}
