import { Component, OnInit } from '@angular/core';

import { DataService, UserModel } from './data.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users.results; let i = index">
      <a [routerLink]="[user.login.uuid]">{{user.name.title}} {{user.name.first}}{{user.name.last}}</a>
      </li>
    </ul>
  `
})
export class UsersComponent implements OnInit {
  users: UserModel;

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    this.dataService.getCachedData()
      .subscribe(
        response => {
          this.users = response
        }
      )
  }

}
