import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ISessions } from '../shared/event.model';

@Component({
  selector: 'sessions-list',
  templateUrl: 'listSessions.component.html',
  styles: [`
  
  `]
})

export class ListSessions implements OnInit, OnChanges {
  @Input() sessions: ISessions[]
  @Input() filterBy: string
  visibleSessions: ISessions[]

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.sessions) return
    this.visibleSessions = this.filterBy === 'all'
      ? [...this.sessions]
      : this.sessions.filter(session => session.level.toLowerCase() === this.filterBy)
  }

  ngOnInit(): void {
    console.log(this.sessions)
  }
}