import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISessions } from '../shared/event.model';

@Component({
  selector: 'create-session',
  templateUrl: './createSessions.component.html',
  styles: [`
  form{
    margin: 4rem;
  }
  div{ text-align: left; }
  em { float: right; color: red; }
  .error input, .error select, .error textarea{ background: #E3C3C5; }
  .error ::-webkit-input-placeholder{ color: #999; }
  .error :ms-input-placeholder{ color: #999; }
  .error :-moz-placeholder{ color: #999; }
  .error ::moz-placeholder{ color: #999; }
  `]
})

export class CreateSessionsComponent implements OnInit {
  sessionForm
  name
  presenter
  duration
  level
  abstract
  @Output() addSession = new EventEmitter()

  constructor() {

  }

  ngOnInit(): void {
    this.name = new FormControl(null, Validators.required)
    this.presenter = new FormControl(null, Validators.required)
    this.duration = new FormControl(null, Validators.required)
    this.level = new FormControl(null, Validators.required)
    this.abstract = new FormControl(null, [Validators.required, Validators.maxLength(355)])

    this.sessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    })
  }

  createSession(formValues) {
    const session: ISessions = {
      name: formValues.name,
      abstract: formValues.abstract,
      duration: +formValues.duration,
      id: undefined,
      level: formValues.level,
      presenter: formValues.presenter,
      voters: []
    }
    console.log(session)
    this.addSession.emit(session)
  }
}