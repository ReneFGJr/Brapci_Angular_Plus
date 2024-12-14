import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public content: Array<any> | any;
  public header = { title: 'Sobre a Brapci' };

  public sub: Array<any> | any;
  public page: string = '';

  constructor(
    private brapciService: BrapciService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.page = params['id']; // (+) converts string 'id' to a number
      this.brapciService.api_post('page/' + this.page).subscribe((res) => {
        this.content = res;
      });
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
