import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-grapho',
  templateUrl: './bar-grapho.component.html',
  styleUrls: ['./bar-grapho.component.scss'], // Corrigido 'styleUrl' para 'styleUrls'
})
export class BarGraphoComponent {
  @Input() public data: any;
  public dataGR:Array<any> | any;

  ngOnInit() {
    this.createProduction();
  }

  ngOnChanges(): void {
    //if (this.chart != undefined) {
    //      this.chart.destroy();
    //}
    if (this.data != undefined) {
      this.data.destroy();
    }
    //if (this.journals != undefined) {
    //      this.journals.destroy();
    //}

    //this.createChart();
    this.createProduction();
    //this.createJournals();
  }

  createProduction() {
    let KEYS = Object.keys(this.data);
    let VALUES = Object.values(this.data);
    this.dataGR = new Chart('MyProduction', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        /* labels: this.data.chart_years.labels, */
        labels: KEYS,

        datasets: [
          {
            label: 'Article',
            /* data: this.data.chart_years.data.Article, */
            data: VALUES,
            backgroundColor: 'blue',
          },
          /*
          {
            label: 'Proceeding',
            data: this.data.chart_years.data.Proceeding,
            backgroundColor: 'limegreen',
          },
          */
        ],
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: '',
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        aspectRatio: 2.5,
      },
    });
    console.log('Production');
    console.log(this.data);
    console.log('KEYS');
    console.log(VALUES);
  }
}
