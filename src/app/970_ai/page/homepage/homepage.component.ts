import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-ia-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageIAComponent {
  data: Array<any> | any;
  public header: Array<any> | any;

  constructor(private brapciService: BrapciService) {}

  ngOnInit() {
    this.brapciService
      .api_post('ai/list', [])
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
        //Subject
      });
  }
}
