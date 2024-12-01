import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  @Input() public data: Array<any> | any;
  public img:string = ''

  ngOnInit()
    {
      this.img = '/assets/genere/male.webp';
      console.log(this.data)
    }
}
