import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-face-photo',
  templateUrl: './face-photo.component.html',
  styleUrl: './face-photo.component.scss'
})
export class FacePhotoComponent {
  @Input() public data: Array<any> | any;
}
