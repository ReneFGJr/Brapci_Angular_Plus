import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-icone-orcd-id',
  templateUrl: './orcd-id.component.html'
})
export class OrcdIDComponent {
  @Input() public data: Array<any> | null = null;
  public IDname: string = '';
  public attributes: { [key: string]: string } = {};

  ngOnInit() {
    if (this.data) {
      // Process the array to extract attributes
      this.data.forEach((item) => {
        if (item.orcid) {
          this.IDname = item.orcid;
        } else {
          Object.assign(this.attributes, item);
        }
      });
    }
  }
}
