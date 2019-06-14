import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private options = { responseType: 'text' as 'json', observe: 'response' as 'response' };
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email:string, password:string) {
    return this.http.post(this.baseUrl + '/auth/login', { email: email, password: password }, this.options);
  }

  currentUser() {
    return this.http.get(this.baseUrl + '/auth/me', this.options);
  }

  logout() {
    return this.http.post(this.baseUrl + '/auth/logout', {}, this.options);
  }

  public isLoggedIn() {
    return (new Date(Date.now()) < this.getExpiration()) ? true : false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = new Date(this.cookieService.get('expiration'));
    if (!expiration) {
      return new Date(0);
    }
    return expiration;
  } 
}
