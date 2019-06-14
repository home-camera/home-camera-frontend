import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CameraService {private options = { responseType: 'text' as 'json', observe: 'response' as 'response' };
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  startRecording() {
    return this.http.get(this.baseUrl + '/recording/start', this.options);
  }

  stopRecording() {
    return this.http.get(this.baseUrl + '/recording/stop', this.options);
  }
}
