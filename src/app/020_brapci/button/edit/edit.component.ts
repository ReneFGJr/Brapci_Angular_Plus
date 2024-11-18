import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  @Input() public ID: string = '';
}
