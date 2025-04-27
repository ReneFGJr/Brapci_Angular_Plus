import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    standalone: false,
    selector: 'app-v-canceled',
  templateUrl: './view-canceled.component.html',
  styleUrl: './view-canceled.component.scss'
})
export class ViewCanceledComponent {
  header: Array<any> | any;
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Página Removida');
    this.meta.addTags([
      { name: 'robots', content: 'noindex, nofollow' }, // Evita indexação da página
    ]);
  }
}
