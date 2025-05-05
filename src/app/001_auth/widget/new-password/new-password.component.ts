import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
  standalone: false,
})
export class NewPasswordComponent {
  @Input() check: string | null = null;
  data: any = null;
  user: any = null;

  passwordForm: FormGroup;
  message = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private serviceBrapci: BrapciService
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required], // APIKEY de verificação
    });
  }

  ngOnInit() {
    console.log("===================================================")
    this.loading = true;
    console.log("Checagem da senha 0",this.check);
    let dt = { apikey: this.check };
      this.serviceBrapci.api_post('socials/check-change-password', dt).subscribe((res) => {
        console.log(res)

        console.log("Checagem da senha 1 ==",res);
        this.user = res;
        this.loading = false;
        console.log("Checagem da senha 2",dt);
    });
  }

  submit() {
    if (this.passwordForm.invalid) return;
    this.loading = true;
    console.log(this.user)
    let dt = {
      user: this.user.ID,
      apikey: this.check,
      pass1: this.passwordForm.value.password,
      pass2: this.passwordForm.value.password2,
    };

    if (this.passwordForm.value.password != this.passwordForm.value.password2) {
      this.message = 'As senhas não conferem!';
      this.loading = false;
      return;
    }

    this.serviceBrapci.api_post('socials/chagePassword', dt).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
        if (this.data.status == '200') {
          this.data = null
          this.message = 'Senha alterada com sucesso!';
          window.location.href = '/login';
        }
      },
      error: (err) => {
        this.message = err.error?.message || 'Erro ao cadastrar senha';
        this.loading = false;
      },
    });
  }
}
