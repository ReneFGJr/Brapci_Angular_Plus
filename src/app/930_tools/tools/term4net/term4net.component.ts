import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-term4net',
  templateUrl: './term4net.component.html'
})
export class Term4netComponent {
  public toolsName: string = 'Termos para .NET';
  public buttonName: string = 'Converter para .NET';
  public api_endpoint: string = 'tools/term4net';

  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Ferramentas bibliográficas',
  };
}
