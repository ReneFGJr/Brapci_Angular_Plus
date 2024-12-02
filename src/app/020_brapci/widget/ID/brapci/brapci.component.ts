import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icone-brapci',
  templateUrl: './brapci.component.html',
})
export class BrapciComponent {
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
