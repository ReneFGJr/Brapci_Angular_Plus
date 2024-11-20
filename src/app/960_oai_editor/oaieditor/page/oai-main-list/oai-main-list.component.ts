import { Component } from '@angular/core';
import { BrapciService } from '../../../../010_service/brapci.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oai-main-list',
  templateUrl: './oai-main-list.component.html',
})
export class OaiMainListComponent {
  data: Array<any> | any;

  constructor(private brapciService: BrapciService, private router: Router) {}

 goEditMetadata(id: string = '') {
    alert('oaieditor/metadata/' + id);
    this.router.navigate(['oaieditor/metadata/' + id]);
  }

  onEdit(id: string = '') {
    this.router.navigate(['oaieditor/edit/' + id]);
  }

  ngOnInit() {
    let url = 'oaiserver/list';

    this.brapciService.api_post(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
