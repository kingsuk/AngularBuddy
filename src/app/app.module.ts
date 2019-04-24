import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { FreeSlotsComponent } from './free-slots/free-slots.component';
import { MeetingsComponent } from './meetings/meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    FreeSlotsComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
