import { Component, Input, OnInit } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    standalone: false,
    selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() public header: Array<any> | any; // Input for header data
  @Input() public meta: Array<any> | any; // Input for metadata

  constructor(
    private brapciService: BrapciService,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Meta tags dinâmicas
    this.metaService.updateTag({
      name: 'description',
      content: 'Descrição da página da rota',
    });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
