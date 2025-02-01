import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
  selector: 'app-basket-marked',
  templateUrl: './basket-marked.component.html',
})
export class BasketMarkedComponent {
  @Input() public id: string = '';
  public basket: Array<any> | any;
  markedImg: string = '';
  icone: Array<any> | any = [
    '/assets/icone/icone_marked.svg',
    '/assets/icone/icone_unmarked.svg',
  ];
  public marketed: boolean = true;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    // Recupera o estado inicial da cesta
    this.basket = this.localStorageService.get('marked') || [];
    console.log("MARK",this.basket);
    this.showIcone();
  }

  changeOn() {
    if (this.marketed) {
      this.removeMarked();
    } else {
      this.includeMarked();
    }
    this.showIcone();
  }

  includeMarked() {
    if (!this.basket.includes(this.id)) {
      this.basket.push(this.id); // Adiciona o item ao array
      this.localStorageService.set('marked', this.basket); // Atualiza o localStorage
    }
  }

  removeMarked() {
    if (this.basket.includes(this.id)) {
      // Filtra o array para remover o item
      this.basket = this.basket.filter((item:any) => item !== this.id);
      // Atualiza o localStorage
      this.localStorageService.set('marked', this.basket);
    }
  }

  showIcone() {
    this.basket = this.localStorageService.get('marked');
    if (this.basket.includes(this.id)) {
      this.marketed = true;
    } else {
      this.marketed = false;
    }
    if (this.marketed) {
      this.markedImg = this.icone[0];
    } else {
      this.markedImg = this.icone[1];
    }
  }
}
