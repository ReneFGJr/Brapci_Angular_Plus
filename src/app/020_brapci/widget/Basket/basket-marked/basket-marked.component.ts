import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
    standalone: false,
    selector: 'app-basket-marked',
  templateUrl: './basket-marked.component.html',
})
export class BasketMarkedComponent implements OnInit {
  @Input() public id: string = '';
  public basket: string[] = [];
  markedImg: string = '';
  icone: string[] = [
    '/assets/icone/icone_marked.svg',
    '/assets/icone/icone_unmarked.svg',
  ];
  public marketed: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadBasket();
  }

  loadBasket(): void {
    this.basket = this.localStorageService.get('marked') || [];
    this.updateMarkedStatus();
  }

  changeOn(): void {
    if (this.marketed) {
      this.removeMarked();
    } else {
      this.includeMarked();
    }
    this.updateMarkedStatus();
  }

  includeMarked(): void {
    if (!this.basket.includes(this.id)) {
      this.basket.push(this.id);
      this.saveBasket();
    }
  }

  removeMarked(): void {
    this.basket = this.basket.filter((item) => item !== this.id);
    this.saveBasket();
  }

  updateMarkedStatus(): void {
    this.marketed = this.basket.includes(this.id);
    this.markedImg = this.marketed ? this.icone[0] : this.icone[1];
  }

  saveBasket(): void {
    this.localStorageService.set('marked', this.basket);
  }
}
