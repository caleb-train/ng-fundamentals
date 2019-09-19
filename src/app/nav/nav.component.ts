import { Component } from '@angular/core';
import { Auth } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav.component.html',
  styles: [`
  li > a.active{
    color: #F97924
  }
  `]
})

export class NavBarComponent {
  constructor(private auth: Auth) {

  }

}