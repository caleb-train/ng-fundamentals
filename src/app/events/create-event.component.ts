import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  selector: 'create-event',
  templateUrl: 'create-event.component.html',
  styles: [`
  form{
    margin: 4rem;
  }
  div{ text-align: left; }
  em { float: right; color: red; }
  .error input{ background: #E3C3C5; }
  .error ::-webkit-input-placeholder{ color: #999; }
  .error :ms-input-placeholder{ color: #999; }
  .error :-moz-placeholder{ color: #999; }
  .error ::moz-placeholder{ color: #999; }
`]
})

export class CreateEvent {
  isDirty: boolean = true;
  ngForm
  newEvent?: any
  constructor(private router: Router, private eventService: EventService) {

  }
  cancel() {
    this.router.navigate(['events']);
  }
  saveEvent(formValues) {
    console.log(formValues)
    this.isDirty = false
    this.router.navigate(['events'])
    this.eventService.saveEvent(formValues)
  }
}