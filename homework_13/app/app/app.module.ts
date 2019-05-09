import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DumbComponent } from './dumb.component';
import { SmartComponent } from './smart.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    DumbComponent,
    DumbComponent,
    SmartComponent,
    IsVisibleDirective,
    IsVisibleDirective,
    IsVisibleDirective,
    MakeBiggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
