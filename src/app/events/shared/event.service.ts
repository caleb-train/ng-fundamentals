import { Injectable } from '@angular/core'
import eventObj from '../event.js';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable()
export class EventService {
  events: IEvent[] = eventObj;

  getEvents = (): Observable<IEvent[]> => {
    let subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(this.events);
      subject.complete();
    }, 100)
    return subject;
  }

  getEvent = (id: number): IEvent => this.events.find(event => Number(event.id) === Number(id))

  saveEvent = event => {
    const id = +this.events[this.events.length - 1].id + 1
    event.id = id
    this.events.push(event)
  }

  updateEvent(event) {
    const index = this.events.findIndex((e) => event.id === e.id)
    this.events[index] = event
  }
}