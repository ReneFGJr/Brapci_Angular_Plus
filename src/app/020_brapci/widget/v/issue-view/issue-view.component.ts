import { Component, Input } from '@angular/core';
import { BrapciService } from '../../../../010_service/brapci.service';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
})
export class IssueViewComponent {
  @Input() public data: Array<any> | any; // Input property for passing data to the component

  constructor(
    private brapciService: BrapciService
  ) {}

  public id: number = 0;
  public source: Array<any> | any;

  ngOnInit() {
      //this.id = +params['id']; // (+) converts string 'id' to a number
      this.id = this.data.ID
      this.brapciService
        .api_post('brapci/issueV2/' + this.id)
        .subscribe((res) => {
          this.source = res;
        });
    }
}
