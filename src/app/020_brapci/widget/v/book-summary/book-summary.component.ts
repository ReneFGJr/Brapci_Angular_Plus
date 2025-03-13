import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-summary',
  templateUrl: './book-summary.component.html',
  styleUrl: './book-summary.component.scss'
})
export class BookSummaryComponent {
  @Input() data: any;
  chapters: Array<any> = [];
  constructor() { }
  ngOnInit(): void {
    this.chapters = this.data?.data?.hasBookChapter || [];
  }

}
