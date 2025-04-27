import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  @Input() public data: Array<any> | any;
  public img:string = ''

  ngOnChanges()
    {
      this.img = this.data.Photo ? this.data.Photo : '/assets/genere/male.webp';
    }
}
