import { BrapciService } from 'src/app/010_service/brapci.service';
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    standalone: false,
    selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public brapci_data: number = 2010;
  public section: string = '';
  public version: string = 'version';
  constructor(
    public brapciService: BrapciService
  ) {}

  ngOnInit() {
    this.version = environment.version_system;
    this.brapci_data = new Date().getFullYear();
    this.section = this.brapciService.getSection();
  }
}
