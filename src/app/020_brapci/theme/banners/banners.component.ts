import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-banners',
  templateUrl: './banners.component.html',
})
export class BannersComponent implements OnInit {
  @Input() public data: Array<any> | any; // Input property for passing data to the component
  public type: string = '';
  public warnning: string = '';

  ngOnInit(): void {
    this.determineBannerType();
  }

  private determineBannerType(): void {
    if (!this.data || !this.data.jnl_rdf) {
      console.warn('Invalid data or missing `jnl_rdf` field.');
      return;
    }

    switch (this.data.jnl_rdf) {
      case '75':
        this.type = 'Benancib';
        break;
      case '18':
        this.type = 'EBBC';
        break;
      case '84':
        this.type = 'ISKOBR';
        break;
      case '104':
        this.type = 'WIDAT';
        break;
      case '112':
        this.type = 'SITI';
        break;
      case '113':
        this.type = 'FEISC';
        break;
      case 'books':
        this.type = 'books';
        break;
      default:
        this.warnning = 'Unknown ' + this.data.jnl_rdf;
        this.type = '';
        console.warn('Unrecognized `jnl_rdf` value:', this.data.jnl_rdf);
    }
  }
}
