import { Component } from '@angular/core';

@Component({
  selector: 'app-txt4unit2',
  templateUrl: './txt4unit2.component.html',
})
export class Txt4unit2Component {
  public toolsName: string = 'Extrair autores ou termos (acumulado)';
  public buttonName: string = 'Extrair';
  public api_endpoint: string = 'tools/txt4unit2';

  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Ferramentas bibliográficas',
  };
}
