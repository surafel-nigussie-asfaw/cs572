import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['home']">Home</a>
      <a [routerLink]="['users']">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'HW 14';

  constructor(private dataService: DataService){
    dataService.getOnlineData()
  }
}
