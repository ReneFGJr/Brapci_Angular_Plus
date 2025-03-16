import { Component, Input } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
  selector: 'app-admin-icone-delete',
  templateUrl: './admin-icone-delete.component.html'
})
export class AdminIconeDeleteComponent {
  @Input() ID: string = '';
  public userID: Array<any> | any = null;

  constructor(
    private brapciService: BrapciService,
    private localStorageService: LocalStorageService
  ) {}


  deleteRegister() {
    if (confirm('Excluir') == true) {
      let dt: Array<any> | any = { token: this.userID.token };
      this.brapciService
        .api_post('rdf/deleteConcept/' + this.ID, dt)
        .subscribe((res) => {

        });
    }
  }
  ngOnInit() {
    this.userID = this.localStorageService.get('user');
  }
}
