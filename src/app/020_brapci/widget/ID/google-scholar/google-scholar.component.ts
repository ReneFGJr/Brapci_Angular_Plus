import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icone-google-scholar',
  templateUrl: './google-scholar.component.html'
})
export class GoogleScholarComponent {
  @Input() public data: Array<any> | null = null;
  public IDname: string = '';
  public attributes: { [key: string]: string } = {};

  ngOnInit() {
    if (this.data) {
      // Process the array to extract attributes
      this.data.forEach((item) => {
        if (item.GoogleScholar) {
          this.IDname = item.GoogleScholar;
        } else {
          Object.assign(this.attributes, item);
        }
      });
    }
  }
}
