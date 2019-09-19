import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  EventListComponent,
  EventDetails,
  CreateEvent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  CreateSessionsComponent,
  ListSessions
} from './events';

import { NavBarComponent } from './nav/nav.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { EventThumbnail } from './components/event-thumbnail.component';
import { Error404Component } from './errors/404.component';

import { Toastr, TOASTER_TOKEN } from './commons/toastr.service';
import { CollapsibleWellComponent } from './commons/collapsible-well.component';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Auth } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const checkDirtyState = (component: CreateEvent) => {
  if (component.isDirty) return window.confirm('You have not saved you form yet');
  return true;
}

declare let toastr: Toastr

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnail,
    NavBarComponent,
    EventDetails,
    CreateEvent,
    Error404Component,
    CreateSessionsComponent,
    ListSessions,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    {
      provide: TOASTER_TOKEN, useValue: toastr
    },
    EventRouteActivator,
    EventListResolver,
    Auth,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
