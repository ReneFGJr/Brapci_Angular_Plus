import { Component } from '@angular/core';

declare const _altmetric_embed_init: any; // Declara a função global do Altmetric

@Component({
  selector: 'app-altmetrix-altmetric',
  templateUrl: './altmetric.component.html'
})
export class AltmetricComponent {
  public doi: string = '10.22477/vii.widat.206';
  public badgeType: string = 'donut'; // Tipo de badge

  ngAfterViewInit(): void {
    // Inicializa o Altmetric Embed após o componente ser renderizado
    if (typeof _altmetric_embed_init === 'function') {
      _altmetric_embed_init();
    }
  }
}