import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrl: './home-events.component.scss',
})
export class HomeEventsComponent {
  public result: Array<any> | any;

  constructor(private brapciService: BrapciService) {}

  ngOnInit() {
    console.log('Events');
    let url = 'event';
    let dt: Array<any> = [];
    this.brapciService.api_post(url, dt).subscribe((res) => {
      this.result = res;
      console.log(res);
    });
  }
}
