import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  @Input() public label: string = '';
  @Input() public value: string = '';
}
