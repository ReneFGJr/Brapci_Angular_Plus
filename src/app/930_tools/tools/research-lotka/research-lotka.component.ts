import { Component } from '@angular/core';

@Component({
  selector: 'app-research-lotka',
  templateUrl: './research-lotka.component.html'
})
export class ResearchLotkaComponent {
  public toolsName: string = 'Produtividade dos autores - Lei de Lotka';
  public buttonName: string = 'Calcular Lotka';
  public api_endpoint: string = 'tools/lotka';

  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Ferramentas bibliográficas',
  };
}
