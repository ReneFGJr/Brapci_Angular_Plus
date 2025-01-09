import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
})
export class UploadFileComponent {
  @Input() public toolsName: string = '';
  @Input() public toolsNameDescription: string = '';
  @Input() public buttonName: string = '';
  @Input() public endpoint: string = '';
  @Input() public action: string = '';
  @Input() public emailSend: string = '';

  emailForm: FormGroup;
  emailSubmitted = false;

  constructor(private brapciService: BrapciService, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmitEmail() {
    if (this.emailForm.valid) {
      console.log('E-mail enviado:', this.emailForm.value.email);
      this.emailSubmitted = true;
    }
  }

  public data: Array<any> | any;
  public dataset: Array<any> | any;
  public datasetR: Array<any> | any;
  public status = 0;

  // Método que recebe o dataset atualizado do componente filho
  updateDataset(newDataset: any[]) {
    this.dataset = newDataset; // Atualiza o dataset no pai
    this.status = 1;
  }

  restart() {
    this.status = 0;
    this.dataset = null;
  }

  process() {
    this.datasetR = this.dataset;
    this.status = 2;

    this.brapciService.api_post(this.endpoint, this.dataset).subscribe(
      (res) => {
        this.data = res;
        console.log('=======================');
        console.log(res);
        this.status = 3;
      },
      (error) => error
    );
  }

  processed() {
    this.status = 3;
  }
}
