import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-v-date-component',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
})
export class DateComponent {
  @Input() public data: Array<any> | any;

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Metadados de Datas - Brapci');
    this.meta.addTags([
      { name: 'robots', content: 'noindex, nofollow' }, // Evita indexação da página
    ]);
  }

  goUrl(route: string) {
    window.location.href = route;
  }
}
