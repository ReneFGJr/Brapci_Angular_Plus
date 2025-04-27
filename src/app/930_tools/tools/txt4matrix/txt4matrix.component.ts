import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-txt4matrix',
  templateUrl: './txt4matrix.component.html'
})
export class Txt4matrixComponent {
  public toolsName: string = 'TXT para MATRIX (XLS)';
  public buttonName: string = 'Converter para MATRIX';
  public api_endpoint: string = 'tools/txt4matrix';

  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Ferramentas bibliográficas',
  };
}
