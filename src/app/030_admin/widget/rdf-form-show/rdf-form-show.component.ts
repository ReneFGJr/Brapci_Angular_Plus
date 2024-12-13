import { Component, Input } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-rdf-form-show',
  templateUrl: './rdf-form-show.component.html',
})
export class RdfFormShowComponent {
  @Input() public data: Array<any> | any;
  @Input() public id: string = '1';

  public showData: Array<any> | any;
  public field: Array<any> | any;
  private modalInstance: any;

  ngOnInit() {
    console.log('Inicio Model');
  }

  openModal(modal: string) {
    const modalElement = document.getElementById(modal);
    this.modalInstance = new bootstrap.Modal(modalElement);
    this.modalInstance.show();
  }

  getItemsByGroup(group: string): any[] {
    return this.data.form.filter((item: any) => item.group === group);
  }

  closeModal(modal: string) {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  onDeleteData(ID: string) {
    this.showData = 'Dados excluídos';
    if (this.modalInstance) {
      setTimeout(() => {
        this.closeModal('dataDeleteModal');
      }, 1000); // Delay de 1 segundo (1000ms)
    }
  }

  newData(i: Array<any> | any) {
    this.field = i;
    this.openModal('dataModal');
    console.log('Data', i);
  }
}
