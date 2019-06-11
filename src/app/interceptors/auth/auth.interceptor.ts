import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  intercept (httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = httpRequest.clone({
      withCredentials: environment.sendCookies,
    });

    return next.handle(clonedRequest);
  }

}
