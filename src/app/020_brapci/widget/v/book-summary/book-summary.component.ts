import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
  selector: 'app-book-summary',
  templateUrl: './book-summary.component.html',
  styleUrl: './book-summary.component.scss'
})
export class BookSummaryComponent {
  @Input() data: any;
  chapters: Array<any> = [];

  constructor(
    private brapciService: BrapciService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chapters = this.data?.summary || [];
    this.chapters = this.data?.data?.hasBookChapter || [];
  }

}
