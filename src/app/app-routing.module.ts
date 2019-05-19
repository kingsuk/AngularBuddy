import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReminderComponent } from './reminder/reminder.component';
import { FreeSlotsComponent } from './free-slots/free-slots.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ServiceNowAllTicketsComponent } from './service-now-all-tickets/service-now-all-tickets.component';
import { ServiceNowSingleComponent } from './service-now-single/service-now-single.component';
import { MasterUiComponent } from './master-ui/master-ui.component';





const routes: Routes = [
  { path: 'reminder', component: ReminderComponent },
  { path: 'free-slots', component: FreeSlotsComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'service-now-all-tickets', component: ServiceNowAllTicketsComponent },
  { path: 'service-now-single', component: ServiceNowSingleComponent },
  { path: 'master', component: MasterUiComponent },
  { path: '',   redirectTo: '/master', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
