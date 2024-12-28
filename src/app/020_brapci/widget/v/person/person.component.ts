import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-v-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  @Input() public data: Array<any> | any;
  public production: any;
  public dataTAG: Array<any> | any;

  ngOnChanges(): void {
    //if (this.chart != undefined) {
    //      this.chart.destroy();
    //}
    if (this.production != undefined) {
      this.production.destroy();
    }
    //if (this.journals != undefined) {
    //      this.journals.destroy();
    //}

    //this.createChart();
    this.createProduction();
    //this.createJournals();

    this.dataTAG = this.data.dataTAG;
  }

  onWorkClick() {

  }

  createProduction() {
    this.production = new Chart('MyProduction', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.data.chart_years.labels,

        datasets: [
          {
            label: 'Article',
            data: this.data.chart_years.data.Article,
            backgroundColor: 'blue',
          },
          {
            label: 'Proceeding',
            data: this.data.chart_years.data.Proceeding,
            backgroundColor: 'limegreen',
          },
          {
            label: 'Book',
            data: this.data.chart_years.data.Book,
            backgroundColor: 'brown',
          },
          {
            label: 'BookChapter',
            data: this.data.chart_years.data.BookChapter,
            backgroundColor: 'red',
          },
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
  }
}
