import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-txt4unit',
  templateUrl: './txt4unit.component.html',
})
export class Txt4unitComponent {
  public toolsName: string = 'Extrair autores ou termos (alfabética)';
  public buttonName: string = 'Extrair';
  public api_endpoint: string = 'tools/txt4unit';

  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Ferramentas bibliográficas',
  };
}
