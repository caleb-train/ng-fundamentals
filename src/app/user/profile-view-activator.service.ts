import { Injectable } from '@angular/core';
import { Auth } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()

export class ProfileViewActivator implements CanActivate {
  constructor(private auth: Auth, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isAuthenticated()) this.router.navigate(['/user/login']);
    return this.auth.isAuthenticated()
  }
}