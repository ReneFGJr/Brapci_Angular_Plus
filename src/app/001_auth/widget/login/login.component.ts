import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/010_service/user.service';

@Component({
    standalone: false,
    selector: 'app-oauth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public Prism = '';
  public email: string = '';
  public message: string = '';
  public image_wait: string = 'assets/img/loading_gear.gif';

  public result: Array<any> | any;

  public oauthForm: FormGroup;
  public oauthSignUp: FormGroup;
  public questionForm: FormGroup;
  public forgotForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.oauthForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.oauthSignUp = this.formBuilder.group({
      signup_name: ['', Validators.required],
      signup_email: ['', [Validators.required, Validators.email]],
      signup_institution: ['', Validators.required],
    });

    this.questionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      text: ['', Validators.required],
    });

    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  forgout() {
    if (this.forgotForm.valid) {
      this.Prism = 'pWait';

      this.userService
        .forgotHttp(this.forgotForm.value.email)
        .subscribe((res) => {
          this.result = res;
          this.message = this.result.message;
          this.Prism = 'pError';
        });
    } else {
      this.message = '<h1>Erro</h1><p>Dados inválidos</p>';
      this.Prism = 'pError';
    }
  }

  signUP() {
    this.userService
      .signUp(
        this.oauthSignUp.value.signup_name,
        this.oauthSignUp.value.signup_email,
        this.oauthSignUp.value.signup_institution
      )
      .subscribe((res) => {
        this.result = res;
        this.message = this.result.message;
        this.Prism = 'pError';
      });
  }

  showThankYou() {
    this.Prism = 'pWait';
    let email = this.questionForm.value.email;
    let text = this.oauthForm.value.text;
    if (this.oauthForm.valid) {
      this.Prism = 'pWait';
      this.userService.questionHttp(email, text).subscribe(
        (res) => {
          this.result = res;
          this.result['message'] + ' ' + this.result['error'];
          this.Prism = 'pError';
          this.message = 'Dados inválidos';
        },
        (error) => {
          console.log('ERRO:' + error);
          this.message = 'Dados inválidos';
          this.Prism = 'pError';
        }
      );
    } else {
      this.message = 'Dados inválidos';
      this.Prism = 'pError';
    }
  }

  moveBTN(cl: string) {
    this.Prism = cl;
  }

  signin() {
    if (this.oauthForm.valid) {
      this.Prism = 'pWait';
      this.userService
        .loginSubmitHttp(
          this.oauthForm.value.email,
          this.oauthForm.value.password
        )
        .subscribe(
          (res) => {
            this.result = res;
            let loged = this.userService.checkLogin(res);
            console.log(res)
            if (loged) {
              this.router.navigate(['/']);
            } else {
              this.message =
                this.result['message'] + ' ' + this.result['error'];
              this.Prism = 'pError';
              this.message = 'Dados inválidos - Login ou senha inválidos';
            }
          },
          (error) => {
            console.log('ERRO:' + error);
            this.message = 'Dados inválidos - Erro de acesso ao servidor';
            this.Prism = 'pError';
          }
        );
    } else {
      this.message = 'Dados inválidos';
      this.Prism = 'pError';
    }
  }
}
