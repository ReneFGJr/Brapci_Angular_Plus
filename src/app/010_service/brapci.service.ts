import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrapciService {
  private apiUrl = environment.apiUrl;
  private user: Array<any> | any;
  private apikey: string = '';
  private url_post: string = '';

  constructor(
    private HttpClient: HttpClient,
    private userService: UserService
  ) {}

  public api_post(
    type: string,
    dt: Array<any> = [],
    development: boolean = false
  ): Observable<Array<any>> {
    var formData: any = new FormData();
    this.user = this.userService.getUser();

    if (!this.user) {
      this.apikey = '';
    } else {
      this.apikey = this.user.token;
    }

    this.url_post = this.apiUrl + type;

    formData.append('user', this.apikey);

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
