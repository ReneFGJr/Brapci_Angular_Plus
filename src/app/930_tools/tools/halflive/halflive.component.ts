import { BrapciService } from 'src/app/010_service/brapci.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-halflive',
  templateUrl: './halflive.component.html',
  styleUrl: './halflive.component.scss',
})
export class HalfliveComponent {
  form: FormGroup;
  data: Array<any> | any

  constructor(
      private fb: FormBuilder,
      private brapciService: BrapciService,
      private http: HttpClient) {
    this.form = this.fb.group({
      textareaContent: [''],
    });
  }

  onSubmit() {
    const formData = this.form.value;
    let url = 'tools/halflive';
    this.brapciService
      .api_post(url, formData)
      .subscribe({
        next: (response) => {
          this.data = response
          console.log(this.data)
        },
        error: (error) => {
          console.error('Erro ao enviar os dados:', error);
        },
      });
  }
}
