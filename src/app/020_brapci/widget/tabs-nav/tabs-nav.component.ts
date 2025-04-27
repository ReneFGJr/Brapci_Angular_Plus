import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html'
})
export class TabsNavComponent {
  @Input() public data: Array<any> | any;
  public rdf: Array<any> | any;
  public urld: string = ''

  displayedColumns = ['key', 'value'];
  tableData: { key: string; value: string }[] = [];

  ngOnInit() {
    this.rdf = this.data.data
    this.prepareTableData();
  }

  prepareTableData() {
    Object.keys(this.rdf).forEach((key) => {
      if (this.rdf[key]?.nn) {
        this.rdf[key].nn.forEach((item: any) => {
          Object.keys(item).forEach((subKey) => {
            if (item[subKey] === '0')
              {
                this.urld = `${subKey}`;
              } else {
                this.urld = `${subKey}: (<a href="/v/${item[subKey]}" target="_blank">${item[subKey]}</a>)`;
              }
            this.tableData.push({
              key: key,
              value: `${this.urld}`,
            });
          });
        });
      } else if (this.rdf[key]?.pt) {
        this.rdf[key].pt.forEach((item: any) => {
          Object.keys(item).forEach((subKey) => {
            this.tableData.push({
              key: key,
              value: `${subKey}: ${item[subKey]}`,
            });
          });
        });
      }
    });
  }
}
