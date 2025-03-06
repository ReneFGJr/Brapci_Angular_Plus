import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-generate-pasword',
  templateUrl: './generate-pasword.component.html'
})
export class GeneratePaswordComponent {
  passwordForm: FormGroup;
  data: Array<any> | any;

  constructor(
    private fb: FormBuilder,
    private brapciService: BrapciService,
    private http: HttpClient
  ) {
    this.passwordForm = this.fb.group({
      tamanho: [8, [Validators.required, Validators.min(1)]],
      caracteresEspeciais: [false],
      menemonico: [false],
    });
  }

  onSubmit() {
    if (this.passwordForm.valid) {
    const formData = this.passwordForm.value;
    let url = 'socials/generatePassword';
    this.brapciService.api_post(url, formData).subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.error('Erro ao enviar os dados:', error);
      },
    });
    }
  }
}
