import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ul>
      <li *ngFor="let item of items" appIsVisible [show]="item.show" appMakeBigger>
        <app-dumb [item]="item"></app-dumb>
      </li>
    </ul>
  `
})
export class SmartComponent implements OnInit {
  items: Array<{ name: string, show: boolean }> = [
    { name: 'surafel', show: true },
    { name: 'hiwot', show: true },
    { name: 'suwot', show: false }
  ]

  constructor() { }

  ngOnInit() {
  }

}
