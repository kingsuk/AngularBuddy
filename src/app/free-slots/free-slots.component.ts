import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


interface OutputData {
  Start: string;
  End: string;
}

@Component({
  selector: 'app-free-slots',
  templateUrl: './free-slots.component.html',
  styleUrls: ['./free-slots.component.css']
})
export class FreeSlotsComponent implements OnInit {

  title = 'Free-Slots';
  
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
