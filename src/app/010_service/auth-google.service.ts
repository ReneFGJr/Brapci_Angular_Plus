import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private clientId = environment.clientIdGoogle;
  /* private redirectUri = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=...&redirect_uri=https://cip.brapci.inf.br/social/callback/google'; */
  private redirectUri = environment.redirectUriGoogle;
  private tokenUrl = environment.tokenUrlGoogle;
  private authorizeUrl = environment.authorizeUrlGoogle;

  constructor(private http: HttpClient) {}

  login() {
      window.location.href = `${this.authorizeUrl}?client_id=${this.clientId}&response_type=code&scope=email profile&redirect_uri=${this.redirectUri}`;
  }

  getAccessToken(code: string) {
    const body = new HttpParams()
      .set('client_id', this.clientId)
      .set('client_secret', environment.cliente_secretGoogle)
      .set('grant_type', 'email profile')
      .set('code', code)
      .set('redirect_uri', this.redirectUri);

    return this.http.post(this.tokenUrl, body);
  }
}
