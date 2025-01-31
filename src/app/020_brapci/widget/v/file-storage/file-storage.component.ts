import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-v-file-storage',
  templateUrl: './file-storage.component.html',
  styleUrl: './file-storage.component.scss',
})
export class FileStorageComponent {
  @Input() public data: Array<any> | any;
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Arquivo de documentos - Brapci');
    this.meta.addTags([
      { name: 'robots', content: 'noindex, nofollow' }, // Evita indexação da página
    ]);
  }

  goUrl(route: string) {
    window.location.href = route;
  }
}
