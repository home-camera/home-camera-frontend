import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';
import { AlertService } from 'src/app/services/layouts/alert.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form:FormGroup;

  ngOnInit() {
  }

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private alertService: AlertService,
              private router: Router) {

    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe((res) => {
          console.log(res.body);
          this.alertService.success('Login avvenuto con successo');
          this.router.navigateByUrl('/home');
        },
        err => this.loginErrorCatcher(err));
    }
  }

  private loginErrorCatcher(err) {
    // 400:
    //   - Bad request (no email or password)
    // 401:
    //   - Invalid credentials

    switch(err.status) {
      case 400:
        this.alertService.error('richiesta invalida', false);
        break;
      case 401:
        this.alertService.error('credenziali errate', false);
        break;
    }
  }
}
