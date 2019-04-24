import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface OutputData {
  Start: string;
  End: string;
  Organizer : string;
  Subject : string;
  Body : string;
  Location : string;
  Duration : string
}

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  title = 'Meetings';
  
  headers: string[];
  dataSet : Observable<OutputData[]>;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/currentData').subscribe((result) => this.success(result), (error) => console.log(error));
    this.http.get('http://localhost:3000/currentHeader').subscribe((result) => this.successHeader(result), (error) => console.log(error));

  }

  success(result: any) {
    var jsonObject: any = result;
    console.log(jsonObject);
    this.dataSet = jsonObject;
  }

  successHeader(result: any) {
    var jsonObject: any = result;
    console.log(jsonObject);
    this.headers = jsonObject;
  }

}
