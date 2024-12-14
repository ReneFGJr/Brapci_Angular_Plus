import { BrapciService } from './../../../010_service/brapci.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() counter: number = 1500000; // Valor final do contador
  public data:Array<any> | any = []
  constructor(private brapciService: BrapciService)
  {}

  ngOnInit(): void {
    let url = 'brapci/counter'
    this.brapciService.api_post(url).subscribe((res) => {
      this.data = res;
      this.counter = this.data.counter
    });
  }
}
