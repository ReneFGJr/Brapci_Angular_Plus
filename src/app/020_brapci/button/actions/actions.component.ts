import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  @Input() public ID: string = '';
}
