import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';
import {
  EventListComponent,
  EventDetails,
  CreateEvent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionsComponent
} from './events';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEvent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
  { path: 'events/sessions/new', component: CreateSessionsComponent },
  { path: 'events/:id', component: EventDetails, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
]