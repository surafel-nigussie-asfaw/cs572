import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: UserModel;

  constructor(private http: HttpClient) {

  }

  getOnlineData() {
    this.http
      .get('https://randomuser.me/api/?results=10')
      .subscribe(response => {
        localStorage.setItem('users', JSON.stringify(response));
      });
  }

  getCachedData(): Observable<UserModel> {
    return of(JSON.parse(localStorage.getItem('users')))
  }

  getCachedDataById(uuid: string): UserDetailModel {
    this.users = JSON.parse(localStorage.getItem('users'))
    return this.users.results.find(user => user.login.uuid === uuid)
  }

}

export interface UserModel {
  info: {
    seed: string,
    results: number,
    page: number,
    version: string
  },
  results: [UserDetailModel]
}

export interface UserDetailModel {
  cell: string
  dob: { date: string, age: number }
  email: string
  gender: string
  id: { name: string, value: string }
  location: { street: string, city: string, state: string, postcode: number, coordinates: { latitude: string, longitude: string } }
  login: { uuid: string, username: string, password: string }
  name: { title: string, first: string, last: string }
  nat: string
  phone: string
  picture: { large: string }
  registered: { date: string, age: number }
}