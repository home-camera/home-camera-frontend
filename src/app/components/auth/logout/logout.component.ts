import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';
import { AlertService } from 'src/app/services/layouts/alert.service';

@Component({
  template: ''
})

export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertService: AlertService,
              private router: Router) {}

  ngOnInit() {
    this.authService.logout()
      .subscribe((res) => {
        this.alertService.success('Logout avvenuto con successo')
        this.router.navigate(['login']);
      },
      err => this.alertService.error(err));
  }

}
