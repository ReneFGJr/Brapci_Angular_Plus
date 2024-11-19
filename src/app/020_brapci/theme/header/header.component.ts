import { Component, Input } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() public header: Array<any> | any;
  @Input() public data: Array<any> | any;
  public cookie: Array<any> | any = [];
  constructor(
    private brapciService: BrapciService
  ) {}

  ngOnInit() {

  }
}
