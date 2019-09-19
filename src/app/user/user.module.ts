import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { Profile } from './profile.component';
import { Login } from './login/login.component';
import { ProfileViewActivator } from './profile-view-activator.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    Profile,
    Login
  ],
  providers: [
    ProfileViewActivator
  ]
})

export class UserModule { }