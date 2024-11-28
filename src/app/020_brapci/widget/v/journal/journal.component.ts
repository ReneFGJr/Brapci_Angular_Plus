import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from '../../../../010_service/brapci.service';

@Component({
  selector: 'app-v-journal',
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss',
})
export class JournalViewComponent {
  @Input() public data: Array<any> | any;
  public page: string = '0';
  public params: Array<any> | any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.page = '1';
  }

  selectPG(pg: string) {
    this.page = pg;
  }

  ngOnInit() {
    console.log(this.data)
    this.activatedRoute.params.subscribe((res) => {
      this.params = res;
    });
  }
}
