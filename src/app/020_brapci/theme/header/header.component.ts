import { Component, Input, OnInit } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() public header: Array<any> | any; // Input for header data
  @Input() public meta: Array<any> | any; // Input for metadata

  constructor(private brapciService: BrapciService) {}

  ngOnInit(): void {
    // Placeholder for initialization logic
    this.initializeHeader();
  }

  private initializeHeader(): void {
    // Example: Perform some initialization logic if needed
    console.log(
      'HeaderComponent initialized with:',
      this.header,
      this.meta
    );
  }
}
