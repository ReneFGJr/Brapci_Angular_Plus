import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-v-proceedings',
  templateUrl: './proceedings.component.html',
})

export class ProceedingsComponent {
  @Input() public data: Array<any> | any;
  public journal: number = 0;
  public road: Array<any> | any = {}

  ngOnInit() {
    this.journal = this.data.Issue.jnl_rdf;
    this.data['jnl_rdf'] = this.journal;

    if (this.journal == 75) {
      this.road = {
        home: 'Home',
        benancib: 'Benancib',
      };
    } else if (this.journal == 18) {
      this.road = {
        home: 'Home',
        'proceedings/issues/18': 'EBBC',
      };
    } else if (this.journal == 84) {
      this.road = {
        home: 'Home',
        'proceedings/issues/84': 'ISKO Brasil',
      };
    }
  }
}
