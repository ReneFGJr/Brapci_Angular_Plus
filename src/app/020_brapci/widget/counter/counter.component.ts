import { BrapciService } from './../../../010_service/brapci.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() counter: number = 1500000; // Valor final do contador
  @Input() service: string = 'home'
  url = 'brapci/counter'

  public data: Array<any> | any = [];
  constructor(private brapciService: BrapciService) {}

  ngOnInit(): void {
    if (this.service != '') {
      this.url = this.url + '/' + this.service;
    }

    this.brapciService.api_post(this.url).subscribe((res) => {
      this.data = res;
      this.counter = this.data.counter;
    });
  }
}
