import { Component } from '@angular/core';

@Component({
  selector: 'app-basket-marked',
  templateUrl: './basket-marked.component.html',
})
export class BasketMarkedComponent {
  markedImg: string = '';
  icone: Array<any> | any = [
    '/assets/icone/icone_marked.svg',
    '/assets/icone/icone_unmarked.svg',
  ];
  public marketed: boolean = true;

  ngOnInit() {
    this.changeicone();
  }

  changeOn() {
    this.marketed = !this.marketed;
    this.changeicone();
  }

  changeicone() {
    if (this.marketed) {
      this.markedImg = this.icone[0];
    } else {
      this.markedImg = this.icone[1];
    }
  }
}
