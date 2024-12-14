import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from '../../../010_service/brapci.service';

@Component({
  selector: 'app-procceedings-id',
  templateUrl: './procceedings-id.component.html'
})
export class ProcceedingsIDComponent implements OnInit {
  public id: string | any;
  public data: Array<any> | any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Capture the 'id' parameter from the URL
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.fetchData(this.id);
    } else {
      console.error('ID parameter is missing in the route.');
    }
  }

  private fetchData(id: string): void {

  }
}
