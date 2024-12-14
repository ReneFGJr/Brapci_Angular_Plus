import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BrapciService {
  public apiUrl = environment.apiUrl;
  private user: Array<any> | any;
  private apikey: string = '';
  private url_post: string = '';

  private sessionKey = 'userSession';

  constructor(
    private HttpClient: HttpClient,
    private userService: UserService,
    public localStorageService: LocalStorageService
  ) {}

  public nbr_title(value: string): string {
    if (!value) return ''; // Retorna vazio caso a string seja nula ou indefinida
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  /************************************************ API CONSULTA */
  public removeCRLF(input: string): string {
    return input.replace(/[\r\n]/g, '');
  }

  public basket(list: string): Observable<Array<any>> {
    let url = `${this.apiUrl}brapci/basket`;
    var formData: any = new FormData();
    formData.append('row', list);
    //let apikey = this.cookieService.get('section');
    //formData.append('user', apikey);

    return this.HttpClient.post<Array<any>>(url, formData).pipe(
      (res) => res,
      (error) => error
    );
  }

  /**
   * Gera um ID único para a sessão (aqui um timestamp pode ser usado como exemplo)
   */
  private generateSessionId(): string {
    return `sc_${new Date().getTime()}`;
  }

  public getSection(): string {
    let session = localStorage.getItem(this.sessionKey);

    if (!session) {
      // Se não existir, cria uma nova sessão (UUID ou timestamp)
      session = this.generateSessionId();
      localStorage.setItem(this.sessionKey, session);
    }

    return session;
  }

  public api_post(
    type: string,
    dt: Record<string, any> = {},
    development: boolean = false
  ): Observable<Array<any>> {
    var formData: any = new FormData();
    this.user = this.userService.getUser();

    this.apikey = this.user?.token || '';

    this.url_post = this.apiUrl + type;

    formData.append('user', this.apikey);
    formData.append('session', this.getSection());

    for (const key in dt) {
      formData.append(key, dt[key]);
    }

    console.log('URL', this.url_post);
    return this.HttpClient.post<Array<any>>(this.url_post, formData).pipe(
      (res) => res,
      (error) => error
    );
  }
}
