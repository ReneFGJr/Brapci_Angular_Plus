import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-table-show',
  templateUrl: './table-show.component.html',
  styleUrl: './table-show.component.scss',
})
export class TableShowComponent {
  @Input() public data: Array<any> | any;

  // Função para ordenar os valores em ordem decrescente
  compareFn(a: any, b: any): number {
    return b.value - a.value; // Ordena do maior para o menor
  }
}
