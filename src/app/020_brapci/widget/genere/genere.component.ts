import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icone-genere',
  templateUrl: './genere.component.html',
})
export class GenereComponent {
  @Input() public data: Array<any> | null = null;
  public gender: string = '';
  public attributes: { [key: string]: string } = {};

  ngOnInit() {
    if (this.data) {
      // Process the array to extract attributes
      this.data.forEach((item) => {
        if (item.gender) {
          this.gender = item.gender;
        } else {
          Object.assign(this.attributes, item);
        }
      });
    }
  }
}
