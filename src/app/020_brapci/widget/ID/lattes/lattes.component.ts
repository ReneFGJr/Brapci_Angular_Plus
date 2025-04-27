import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-icone-lattes',
  templateUrl: './lattes.component.html',
})
export class LattesComponent {
  @Input() public data: Array<any> | null = null;
  public IDname: string = '';
  public attributes: { [key: string]: string } = {};

  ngOnInit() {
    if (this.data) {
      // Process the array to extract attributes
      this.data.forEach((item) => {
        if (item.lattes) {
          this.IDname = item.lattes;
        } else {
          Object.assign(this.attributes, item);
        }
      });
    }
  }
}
