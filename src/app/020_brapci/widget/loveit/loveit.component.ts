import { Component, Input } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';
import { UserService } from '../../../010_service/user.service';

@Component({
    standalone: false,
    selector: 'app-component-loveit',
  templateUrl: './loveit.component.html'
})
export class LoveitComponent {
  @Input() public url: string = '';
  @Input() public id: string = '';

  public loveit: string = '/assets/icone/love-it-off.svg';
  public loveitValue: number = 0;
  public data: Array<any> | any;
  public user: Array<any> | any;

  constructor(
    public brapciService: BrapciService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    if (!this.user) {
      // http://localhost:4200/v/309620
    } else {
      let dt: Array<any> | any = { id: this.id };
      this.brapciService.api_post('like/getLike', dt).subscribe((res) => {
        this.data = res;
        this.loveitValue = parseFloat(this.data.liked);
        this.change();
      });
    }
  }

  change() {
    if (this.loveitValue == 1) {
      this.loveit = '/assets/icone/loveit-pulse.svg';
    } else {
      this.loveit = '/assets/icone/love-it-off.svg';
    }
  }

  changeit() {
    if (this.loveitValue == 0) {
      this.loveit = '/assets/icone/loveit-pulse.svg';
      this.loveitValue = 1;
      let dt: Array<any> | any = { id: this.id };
      this.brapciService.api_post('like/liked', dt).subscribe((res) => {
      });
    } else {
      this.loveit = '/assets/icone/love-it-off.svg';
      this.loveitValue = 0;
      let dt: Array<any> | any = { id: this.id };
      this.brapciService.api_post('like/disliked', dt).subscribe((res) => {
      });
    }
  }
}
