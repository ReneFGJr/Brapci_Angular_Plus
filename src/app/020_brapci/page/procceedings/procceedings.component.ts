import { Component } from '@angular/core';
import { BrapciService } from '../../../010_service/brapci.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-procceedings',
  templateUrl: './procceedings.component.html',
})
export class MainProcceedingsComponent {
  public sources: Array<any> | any;
  public header: { title: string } = { title: 'Brapci Eventos Indexados' };
  constructor(
    private brapciService: BrapciService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.brapciService.api_post('brapci/source/E').subscribe((res) => {
      this.sources = res;
    });
  }

  viewProceeding(id: string) {
    this.router.navigate(['proceedings/issues/' + id]);
  }
}
