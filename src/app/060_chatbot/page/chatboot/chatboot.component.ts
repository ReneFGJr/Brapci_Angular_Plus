import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-chatboot',
  templateUrl: './chatboot.component.html',
  styleUrl: './chatboot.component.scss',
})
export class ChatbootComponent {
  public data: Array<any> | any;
  public header: Array<any> | any;

  OnNgInit() {}
  constructor() {
    // Initialize the `data` property with a default value (optional)
    this.header = { title: 'ChatIA da Brapci - Alpha' };
  }
}
