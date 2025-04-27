import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-admin-icones',
  templateUrl: './admin-icones.component.html'
})
export class AdminIconesComponent {
  @Input() public ID:string = ''
}
