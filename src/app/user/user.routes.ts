import { Routes } from '@angular/router';
import { Profile } from './profile.component';
import { Login } from './login/login.component';
import { ProfileViewActivator } from './profile-view-activator.service';

export const userRoutes: Routes = [
  { path: 'profile', component: Profile, canActivate: [ProfileViewActivator] },
  { path: 'login', component: Login },
]