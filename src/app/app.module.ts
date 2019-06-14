import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';

import { AuthHttpInterceptor } from './interceptors/auth/auth.interceptor';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AlertComponent } from './components/layouts/alert/alert.component';
import { AlertService } from './services/layouts/alert.service';
import { HomeComponent } from './components/layouts/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RecordingComponent } from './components/recording/recording/recording.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AlertComponent,
    HomeComponent,
    LogoutComponent,
    RecordingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    CookieService,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
