import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'event-list',
  template: `
    <div class="p-5">
      <h1 class="mb-2">Upcoming Angular Events</h1>
      <hr />
      <div class="padd row">
        <div class="col-md-6" *ngFor="let event of events">
          <event-thumb [event]="event"></event-thumb>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .padd {
      padding: 4rem;
    }
  `]
})
export class EventListComponent implements OnInit {

  events: IEvent[];

  constructor(
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}