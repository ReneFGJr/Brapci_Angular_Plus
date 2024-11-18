import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-benancib',
  templateUrl: './benancib.component.html',
  styleUrl: './benancib.component.scss',
})
export class BenancibComponent {
  @Input() public section: Array<any> | any;
  @Input() public publisher: string = '';
  @Input() public cover: string = '';
  @Input() public caption: string = '';

  logo_benancib = '/assets/img/logo_benancib.png';
  logo_benancib_icone = '/assets/img/logo_benancib.gif';
  ngOnInit() {}
}
