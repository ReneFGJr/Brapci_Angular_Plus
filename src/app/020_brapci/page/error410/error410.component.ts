import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    standalone: false,
    selector: 'app-error410',
  templateUrl: './error410.component.html',
  styleUrl: './error410.component.scss',
})
export class Error410Component {
  header: Array<any> | any;
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Página Removida');
    this.meta.addTags([
      { name: 'robots', content: 'noindex, nofollow' }, // Evita indexação da página
    ]);
  }
}
