import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doi-show',
  templateUrl: './doi-show.component.html',
})
export class DoiShowComponent {
  @Input() public data: any = {};
  @Input() public DOI: string = '';

  ngOnChanges() {
    this.extractDOIs();
  }

  doiList: { name: string; url: string }[] = [];

  extractDOIs() {
    if (this.data.hasDOI?.pt) {
      this.doiList = this.data.hasDOI.pt.map(
        (doiObj: Record<string, string>) => {
          const doiKey = Object.keys(doiObj)[0]; // Obtém a chave (o DOI)
          return {
            name: doiKey,
            url: `https://doi.org/${doiKey}`,
          };
        }
      );
    }
  }

  getDOI(obj: any): string {
    if (!obj) return '';

    // Obtém a primeira chave do objeto (a chave do DOI)
    const doiKey = Object.keys(obj)[0];
    return doiKey || '';
  }
}
