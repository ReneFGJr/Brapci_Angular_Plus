import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  public header: Array<any> | any;
  constructor(private router: Router) {
    this.header = { title: 'Ferramentas Bibliográficas' };
  }
}
