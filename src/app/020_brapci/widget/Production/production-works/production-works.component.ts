import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-works',
  templateUrl: './production-works.component.html',
  styleUrls: ['./production-works.component.scss'],
})
export class ProductionWorksComponent implements OnInit {
  @Input() public works: Array<any> = []; // Inicialize como um array vazio para evitar problemas

  ngOnInit() {

  }
}
