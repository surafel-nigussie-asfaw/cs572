import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, UserDetailModel } from './data.service';

@Component({
  selector: 'app-user-details',
  template: `
  
    <h1> Name: {{userDetail.name.last}} </h1>
    <p> Street: {{userDetail.location.street}} </p>
    <p> Email: {{userDetail.email}} </p>
    <p> Phone: {{userDetail.phone}} </p>
    
  `
})
export class UserDetailsComponent {
  userDetail: UserDetailModel;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params
      .subscribe(params => {
        this.userDetail = this.dataService.getCachedDataById(params['uuid'])
      })
  }

}
