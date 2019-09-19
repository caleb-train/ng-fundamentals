import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()

export class Auth {
  currentUser: IUser
  loginUser({ firstName, lastName, userName }) {
    this.currentUser = {
      id: 1,
      firstName,
      lastName,
      userName,
    }
  }
  UpdateCurrentUser({ firstName, lastName, userName }) {
    this.currentUser = {
      id: 1,
      firstName,
      lastName,
      userName,
    }
  }
  isAuthenticated = () => !!this.currentUser
}