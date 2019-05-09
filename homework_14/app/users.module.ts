import { NgModule, OnInit, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import { UserGuard } from './user.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: ':uuid',
    component: UserDetailsComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [UserGuard],
  bootstrap: [UsersComponent]
})
export class UsersModule {

} 