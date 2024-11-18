import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  @Input() public ID: string = '';
}
