import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public brapci_data: number = 2010;
  public section: string = '';
  public version: string = 'version';
  constructor() {}

  ngOnInit() {
    this.version = environment.version_system;
    this.brapci_data = new Date().getFullYear();
    console.log(this.brapci_data); // output 2020
    this.section = '';
  }
}
