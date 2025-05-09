import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrl: './home-events.component.scss',
})
export class HomeEventsComponent {
  public result: Array<any> | any;

  constructor(private brapciService: BrapciService) {}

  ngOnInit() {
    let url = 'event';
    let dt: Array<any> = [];
    this.brapciService.api_post(url, dt).subscribe((res) => {
      this.result = res;
    });
  }
}
