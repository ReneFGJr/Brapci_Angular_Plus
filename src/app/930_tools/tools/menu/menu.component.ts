import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class ToolsMenuComponent {
  public serv = [
    { name: 'Convert TXT to .NET<br><br>(autores)', url: 'txt4net', type: 'B' },
    { name: 'Convert TXT to .NET<br><br>(termos)', url: 'term4net', type: 'B' },
    { name: 'Extrair Autor/Assuntos (Alfabética)', url: 'txt4unit', type: 'B' },
    {
      name: 'Extrair Autor/Assuntos (Frequencia)',
      url: 'txt4unit2',
      type: 'B',
    },
    { name: 'Convert TXT to Matrix', url: 'txt4matrix', type: 'B' },
    { name: 'Convert RIS to MARC21', url: 'ris4marc', type: 'B' },
    { name: 'Halflive', url: 'halflive', type: 'B' },
  ];

  public conv = [
    { name: 'Cálculo de amostra', url: 'amostra', type: 'T' },
    { name: 'Lei de Price (Autores)', url: 'price', type: 'T' },
    { name: 'Lei de Lotka (Autores)', url: 'lotka', type: 'T' },
    { name: 'Lei de Bradford (Periódicos)', url: 'bradford', type: 'T' },
    /* { name: 'Convert UTF8/ISO8859', url: 'txt4char', type: 'T' }, */
    /* { name: 'Troca Caracteres', url: 'txtChange', type: 'T' }, */
    /* { name: 'Convert .net para Gephi)', url: 'net4gephi', type: 'T' }, */
  ];

  public other = [
    { name: 'Gerador de senhas', url: 'gPassword', type: 'T' },
    /* { name: 'Convert UTF8/ISO8859', url: 'txt4char', type: 'T' }, */
    /* { name: 'Troca Caracteres', url: 'txtChange', type: 'T' }, */
    /* { name: 'Convert .net para Gephi)', url: 'net4gephi', type: 'T' }, */
  ];

  goUrl(url: string) {
    alert(url);
  }
}
