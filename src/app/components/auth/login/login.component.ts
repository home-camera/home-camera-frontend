import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../../../services/auth/auth.service';

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
          //console.log('logged successfully');
          this.authService.currentUser().subscribe((ress) => {
            console.log(ress.body);
          },
          erre => console.log(erre));
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
        alert('richiesta invalida');
        break;
      case 401:
        alert('credenziali errate');
        break;
    }
  }
}
