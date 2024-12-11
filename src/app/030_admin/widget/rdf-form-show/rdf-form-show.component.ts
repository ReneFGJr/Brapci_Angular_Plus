import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-rdf-form-show',
  templateUrl: './rdf-form-show.component.html',
})
export class RdfFormShowComponent {
  @Input() public data: Array<any> | any;
  @Input() public id: string = '';
  public showData: Array<any> | any;
  public field: Array<any> | any;

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  dataForm: FormGroup;
  private modalInstance: any;

  openModal(modal: string) {
    const modalElement = document.getElementById(modal);
    this.modalInstance = new bootstrap.Modal(modalElement);
    this.modalInstance.show();
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
    this.field = i
    console.log('Data', i)
  }

  onSubmit() {
    if (this.dataForm.valid) {
      console.log('Form Data:', this.dataForm.value);
      this.closeModal('dataModal');
    } else {
      console.error('Form is invalid');
    }
  }
}
