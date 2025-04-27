import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-icone-open-alex',
  templateUrl: './open-alex.component.html',
})
export class OpenAlexComponent {
  @Input() public data: Array<any> | null = null;
  public IDname: string = '';
  public attributes: { [key: string]: string } = {};

  ngOnInit() {
    if (this.data) {
      // Process the array to extract attributes
      this.data.forEach((item) => {
        if (item.OpenAlex) {
          this.IDname = item.OpenAlex;
        } else {
          Object.assign(this.attributes, item);
        }
      });
    }
  }
}
