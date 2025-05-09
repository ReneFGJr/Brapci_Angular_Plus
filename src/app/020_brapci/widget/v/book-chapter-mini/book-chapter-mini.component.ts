import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-book-chapter-mini',
  templateUrl: './book-chapter-mini.component.html'
})
export class BookChapterMiniComponent {
  @Input() bookChapter: Array<any> = [];
  @Input() showBookTitle: boolean = true;
}
