import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brapci-id',
  templateUrl: './brapci-id.component.html',
})
export class BrapciIDComponent implements OnInit {
  @Input() public data: Array<any> | any;
  public url: string = '';
  public brapciID: string = '/assets/favicon.png';

  ngOnInit(): void {
    // Correctly assign the value to the component's `url` property
    if (this.data && this.data.ID) {
      this.url = `https://hdl.handle.net/20.500.11959/brapci/${this.data.ID}`;
    }
  }
}
