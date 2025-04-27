import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';

@Component({
    standalone: false,
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
  public userID: Array<any> | any = null;

  emailForm: FormGroup;
  emailSubmitted = false;

  constructor(
      private brapciService: BrapciService,
      private fb: FormBuilder,
      private localStorageService: LocalStorageService) {
    this.userID = this.localStorageService.get('user');
    console.log("USER",this.userID);
    this.emailForm = this.fb.group({
      name: [
        this.userID?.givenName + ' ' + this.userID?.sn,
        [Validators.required],
      ],
      email: [this.userID?.email, [Validators.required, Validators.email]],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  onSubmitEmail() {
    if (this.emailForm.valid) {
      console.log('E-mail enviado:', this.emailForm.value.email);
      this.emailSubmitted = true;
      let url = 'brapci/book/submit';
      this.dataset['name'] = this.emailForm.value.name;
      this.dataset['email'] = this.emailForm.value.email;

      this.status = 2;

      this.brapciService.api_post(url, this.dataset).subscribe(
        (res) => {
          this.data = res;
          this.status = 3;
        },
        (error) => error
      );
    }
  }

  public data: Array<any> | any;
  public dataset: Array<any> | any;
  public datasetR: Array<any> | any;
  public status = 0;
  public ErrorMessage = '';

  // Método que recebe o dataset atualizado do componente filho
  updateDataset(newDataset: any[]) {
    this.dataset = newDataset; // Atualiza o dataset no pai

    if (this.dataset.status == '500') {
      console.log(this.dataset);
      this.ErrorMessage = 'Erro no processamento do arquivo';
    } else {
      this.status = 1;
    }
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
        this.status = 3;
      },
      (error) => error
    );
  }

  processed() {
    this.status = 3;
  }
}
