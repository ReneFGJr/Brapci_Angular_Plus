import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrl: './tabs-nav.component.scss'
})
export class TabsNavComponent {
  @Input() public data:Array<any>|any
}
