import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
  selector: 'app-v-book-chapter',
  templateUrl: './book-chapter.component.html',
  styleUrl: './book-chapter.component.scss',
})
export class BookChapterComponent {
  @Input() data: any;
  full: boolean = true;

  @Input() public header: Array<any> | any;
  public userID: Array<any> | any = null;

  constructor(
    private brapciService: BrapciService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userID = this.localStorageService.get('user');

    this.header = [];
    this.header = { title: 'Capítulo de Livro' };
  }
}
