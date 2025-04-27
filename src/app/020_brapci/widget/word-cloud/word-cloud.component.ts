import { Component, ElementRef, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss'],
})
export class WordCloudComponent {
  @Input() words: { text: string; size: number }[] = [];
  rotate = () => Math.floor(Math.random() * 2) * 90;

  dataTAG = [
    { text: 'Angular', size: 40 },
    { text: 'TypeScript', size: 30 },
    { text: 'JavaScript', size: 50 },
    { text: 'HTML', size: 20 },
    { text: 'CSS', size: 25 },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  onWorkClick(word: any) {
    alert(`Clicked word: ${word.text}`);
  }
}
