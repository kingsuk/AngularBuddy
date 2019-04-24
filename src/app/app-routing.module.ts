import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReminderComponent } from './reminder/reminder.component';
import { FreeSlotsComponent } from './free-slots/free-slots.component';
import { MeetingsComponent } from './meetings/meetings.component';



const routes: Routes = [
  { path: 'reminder', component: ReminderComponent },
  { path: 'free-slots', component: FreeSlotsComponent },
  { path: 'meetings', component: MeetingsComponent }
  // { path: '',   redirectTo: '/reminder', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
