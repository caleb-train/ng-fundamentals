import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapse-well',
  template: `<div class="well pointable" (click)="collapseWell()">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content select="[well-body]" *ngIf="!visible"></ng-content>
  <div>`,
  styles: [``]
})

export class CollapsibleWellComponent {
  visible: boolean = true

  constructor() {

  }

  collapseWell() {
    this.visible = !this.visible
  }
}