import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email:string, password:string ) {
    return this.http.post<any>(this.baseUrl + '/auth/login', {email: email, password: password});
  }
}
