import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class ToolsMenuComponent {
  public serv = [
    { name: 'Convert TXT to .NET', url: 'txt4net', type: 'B' },
    { name: 'Extrair Autor/Assuntos (Alfabética)', url: 'txt4unit', type: 'B' },
    {
      name: 'Extrair Autor/Assuntos (Frequencia)',
      url: 'txt4unit2',
      type: 'B',
    },
    { name: 'Convert TXT to Matrix', url: 'txt4matrix', type: 'B' },
    { name: 'Convert RIS to MARC21', url: 'ris4marc', type: 'B' },
  ];

  public conv = [
    { name: 'Cálculo de amostra', url: 'amostra', type: 'T' },
    { name: 'Lei de Price (Autores)', url: 'price', type: 'T' },
    /* { name: 'Convert UTF8/ISO8859', url: 'txt4char', type: 'T' }, */
    /* { name: 'Troca Caracteres', url: 'txtChange', type: 'T' }, */
    /* { name: 'Convert .net para Gephi)', url: 'net4gephi', type: 'T' }, */
  ];

  goUrl(url: string) {
    alert(url);
  }
}
