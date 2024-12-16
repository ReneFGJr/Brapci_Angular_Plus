import { Component } from '@angular/core';

@Component({
  selector: 'app-research-bradford',
  templateUrl: './research-bradford.component.html',
})
export class ResearchBradfordComponent {
  public road: Array<any> | any = {
    home: 'Home',
    tools: 'Ferramentas bibliográficas',
  };
}
