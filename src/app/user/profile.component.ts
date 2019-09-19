import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from './auth.service';
import { TOASTER_TOKEN, Toastr } from '../commons/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styles: [`
    div{ text-align: left; }
    em { float: right; color: red; }
    .error input{ background: #E3C3C5; }
    .error ::-webkit-input-placeholder{ color: #999; }
    .error :ms-input-placeholder{ color: #999; }
    .error :-moz-placeholder{ color: #999; }
    .error ::moz-placeholder{ color: #999; }
  `]
})

export class Profile implements OnInit {
  profileForm
  firstName
  lastName
  userName

  constructor(private auth: Auth, private router: Router, @Inject(TOASTER_TOKEN) private toastr: Toastr) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
    this.userName = new FormControl(this.auth.currentUser.userName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  updateProfile(formValues) {
    if (this.profileForm.invalid) return
    this.auth.UpdateCurrentUser(formValues)
    // this.router.navigate(['events'])
    this.toastr.success('user updated successfully')

  }
  validateControl(name) {
    return this[name].touched && this[name].invalid
  }
}