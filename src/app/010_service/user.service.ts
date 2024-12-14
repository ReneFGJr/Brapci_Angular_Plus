import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://cip.brapci.inf.br/api/';

  public user: any = null;
  public logged: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}



  /** Logout */
  public logout(): void {
    this.localStorageService.remove('user');
    this.logged = false;
  }

  /** Get User */
  public getUser(): any {
    this.user = this.localStorageService.get('user');
    return this.user || null;
  }

  /** Check Login */
  public checkLogin(res: any): boolean {
    if (res.status === '200') {
      this.user = {
        id: res.id,
        displayName: res.displayName,
        email: res.email,
        givenName: res.givenName,
        sn: res.sn,
        token: res.token,
        persistentId: res['persistent-id'],
        admin: res.admin,
      };

      this.localStorageService.set('user', this.user);
      this.logged = true;
      return true;
    } else {
      console.error('Dados incorretos');
      return false;
    }
  }

  /** Is Logged */
  public isLogged(): boolean {
    return !!this.getUser();
  }

  /** Sign Up */
  public signUp(
    name: string,
    email: string,
    institution: string
  ): Observable<any> {
    const url = `${this.url}socials/signup`;
    const formData = new FormData();
    formData.append('signup_name', name);
    formData.append('signup_email', email);
    formData.append('signup_institution', institution);

    return this.httpClient.post<any>(url, formData).pipe(
      catchError((error) => {
        console.error('Erro ao realizar o cadastro:', error);
        return throwError(() => error);
      })
    );
  }

  /** Send Question */
  public questionHttp(email: string, text: string): Observable<any> {
    const url = `${this.url}socials/contact`;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('text', text);

    return this.httpClient.post<any>(url, formData).pipe(
      catchError((error) => {
        console.error('Erro ao enviar mensagem:', error);
        return throwError(() => error);
      })
    );
  }

  /** Forgot Password */
  public forgotHttp(email: string): Observable<any> {
    const url = `${this.url}socials/forgot`;
    const formData = new FormData();
    formData.append('email', email);

    return this.httpClient.post<any>(url, formData).pipe(
      catchError((error) => {
        console.error('Erro ao solicitar recuperação de senha:', error);
        return throwError(() => error);
      })
    );
  }

  /** Login */
  public loginSubmitHttp(login: string, pass: string): Observable<any> {
    const url = `${this.url}socials/signin`;
    const formData = new FormData();
    formData.append('user', login);
    formData.append('pwd', pass);

    return this.httpClient.post<any>(url, formData).pipe(
      catchError((error) => {
        console.error('Erro ao realizar login:', error);
        return throwError(() => error);
      })
    );
  }

  /** Login OAuth */
  public loginOauthHttp(token: string): Observable<any> {
    const url = `${this.url}socials/oauth2`;
    const formData = new FormData();
    formData.append('token', token);

    return this.httpClient.post<any>(url, formData).pipe(
      catchError((error) => {
        console.error('Erro no login OAuth:', error);
        return throwError(() => error);
      })
    );
  }
}
