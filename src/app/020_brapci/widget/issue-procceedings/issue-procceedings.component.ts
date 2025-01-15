import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrapciService } from '../../../010_service/brapci.service';

@Component({
  selector: 'app-issue-procceedings',
  templateUrl: './issue-procceedings.component.html',
  styleUrls: ['./issue-procceedings.component.scss'], // Corrected styleUrl to styleUrls
})
export class IssueProcceedingsComponent implements OnInit {
  @Input() public id: string = '';

  constructor(
    private route: ActivatedRoute,
    private brapciService: BrapciService,
    private router: Router
  ) {}

  public source: Array<any> | any;
  public data: Array<any> | any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.brapciService
        .api_post('brapci/source/' + this.id)
        .subscribe((res) => {
          this.source = res;
          this.data = {
            jnl_rdf: this.source['source']['id_jnl'],
            jnl_name: this.source['source']['jnl_name'],
            jnl_name_abrev: this.source['source']['jnl_name_abrev'],
          };
        });
    });
  }

  viewIssue(id: string) {
    this.router.navigate(['v/' + id]);
  }
}
