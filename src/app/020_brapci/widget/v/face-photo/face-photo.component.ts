import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-v-face-photo',
  templateUrl: './face-photo.component.html',
  styleUrl: './face-photo.component.scss'
})
export class FacePhotoComponent {
  @Input() public data: Array<any> | any;
}
