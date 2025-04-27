import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
})
export class HomeNewsComponent {
  label_news: string = 'Novidades';
  text: string = '';
  result: Array<any> | any = [];

  constructor(private brapciService: BrapciService) {}

  ngOnInit() {
    let dt: Array<any> | any = {};
    let url = 'brapci/news';
    this.brapciService.api_post(url, dt).subscribe((res) => {
      this.result = res;
    });
  }
}
