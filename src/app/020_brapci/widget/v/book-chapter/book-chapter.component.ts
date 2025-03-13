import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-book-chapter',
  templateUrl: './book-chapter.component.html',
  styleUrl: './book-chapter.component.scss',
})
export class BookChapterComponent {
  @Input() data: any;
  full: boolean = true;
}
