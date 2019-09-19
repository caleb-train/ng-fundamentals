import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../events';

@Component({
  selector: 'event-thumb',
  template: `
    <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail w-100 text-left">
      <h2>{{event.name | uppercase}}</h2>
      <h5>Date: {{event.date | date: 'shortDate'}}</h5>
      <div [ngClass]= "{green: event?.time === '8:00 am', bold: event?.time === '9:00 am'}" [ngSwitch]="event?.time">
      Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <h5>Price: {{event.price | currency: 'USD'}}</h5>
      <h5>Location: {{event.location.address}} {{event.location.city}}, {{event.location.country}}</h5>
      <button class="btn btn-primary" (click)="handleClick()"> Click Me</button>
    </div>
  `,
  styles: [`
    .well h5{
      color: #bbb;
    }
    .bold{
      font-weight: bold !important;
    }
    .green{
      color: lightgreen !important;
    }
  `]
})

export class EventThumbnail {
  @Input() event: IEvent

  handleClick = () => {
    console.log('clicked');
  }
}