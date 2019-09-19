import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISessions } from '../shared/event.model';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  styles: [`
    .container{ padding: 5rem; }
    .event-img{ height: 100px; }
    a { cursor: pointer; }
    .sessions{ margin-bottom: 2rem; }
  `]
})

export class EventDetails implements OnInit {
  event: IEvent
  addMode: boolean
  filterBy: string = 'all'

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true
  }

  createSession(session: ISessions) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }
}