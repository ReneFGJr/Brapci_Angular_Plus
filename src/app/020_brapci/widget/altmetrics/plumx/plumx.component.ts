import { Component, AfterViewInit, Input } from '@angular/core';

declare const _plumx_embed_init: any; // Declara a função global do Altmetric

@Component({
    standalone: false,
    selector: 'app-altmetrix-plumx',
  templateUrl: './plumx.component.html',
})
export class PlumxComponent {
  @Input() doi: string = '';
  @Input() badgeType: string = 'donut'; // Tipo de badge

  ngAfterViewInit(): void {
    // Inicializa o Altmetric Embed após o componente ser renderizado
    if (typeof _plumx_embed_init === 'function') {
      _plumx_embed_init();
    }
  }
}
