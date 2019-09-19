import { Component } from '@angular/core';
import { Auth } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
  em{
    float: right;
    color: red
  }
  form{
    text-align: left;
  }
  `]
})

export class Login {
  username
  password
  mouseOverLogin

  constructor(private auth: Auth, private router: Router) {

  }

  cancel(loginForm) {
    this.router.navigate(['events']);
  }

  logIn(loginForm) {
    console.log(loginForm)
    this.auth.loginUser(loginForm)
    this.router.navigate(['events']);
  }
}