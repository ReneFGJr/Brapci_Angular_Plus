import { Component } from '@angular/core';

@Component({
  selector: 'app-screen-saver',
  templateUrl: './screen-saver.component.html',
  styleUrl: './screen-saver.component.scss',
})
export class ScreenSaverComponent {
  public img: number = 0;
  public src: string = '';
  public src_img: Array<any> = [
    '/assets/screensaver/brapci_ripple.gif',
    '/assets/screensaver/brapci_rotate.gif',
  ];

  ngOnInit() {
    this.src = this.src_img[this.img];
  }

  chageImg() {
    this.img = this.img + 1;
    if (this.img >= this.src_img.length) {
      this.img = 0;
    }
    this.src = this.src_img[this.img];
  }

  isAnimating = true;

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;
  }
}
