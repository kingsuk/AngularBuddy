import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Reminder {
  reminderText: string;
  reminderDateTime:string;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  
  title = 'Reminders';
  
  headers: string[];
  reminders : Observable<Reminder[]>;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/currentData').subscribe((result) => this.success(result), (error) => console.log(error));
    this.http.get('http://localhost:3000/currentHeader').subscribe((result) => this.successHeader(result), (error) => console.log(error));

  }

  success(result: any) {
    var jsonObject: any = result;
    console.log(jsonObject);
    this.reminders = jsonObject;
  }

  successHeader(result: any) {
    var jsonObject: any = result;
    console.log(jsonObject);
    this.headers = jsonObject;
  }

}
