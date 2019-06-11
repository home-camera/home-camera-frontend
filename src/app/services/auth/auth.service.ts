import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email:string, password:string) {
    return this.http.post(this.baseUrl + '/auth/login', { email: email, password: password }, { responseType: 'text', observe: 'response' as 'response' });
  }

  currentUser() {
    return this.http.get(this.baseUrl + '/auth/me', { responseType: 'text' as 'json', observe: 'response' as 'response' });
  }

  logout() {
    return this.http.post(this.baseUrl + '/auth/logout', {}, { withCredentials: true });
  }

  isAuthenticated(): boolean {
    return false;
  }

  getExpiration() {
    //const expiration = localStorage.getItem("expires_at");
    //const expiresAt = JSON.parse(expiration);
    //return moment(expiresAt);
  }
}
