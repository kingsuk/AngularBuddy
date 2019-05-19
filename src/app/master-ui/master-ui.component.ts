import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { interval } from 'rxjs';

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
  selector: 'app-master-ui',
  templateUrl: './master-ui.component.html',
  styleUrls: ['./master-ui.component.css']
})
export class MasterUiComponent implements OnInit {

  title = 'ServiceNow';
  
  @Input() headers: string[];
  @Output() headersChange = new EventEmitter<string[]>();
  @Input() dataSet : Observable<OutputData[]>;
  @Output() dataSetChange = new EventEmitter<Observable<OutputData[]>>();


  constructor(private http:HttpClient) { }

  ngOnInit() {
    //this.http.get('http://localhost:3000/currentData').subscribe((result) => this.success(result), (error) => console.log(error));
    //this.http.get('http://localhost:3000/currentHeader').subscribe((result) => this.successHeader(result), (error) => console.log(error));
    interval(1000).subscribe((x) => 
      this.makeApiCalls()
      );
  }

  makeApiCalls(){
    this.http.get('http://localhost:3000/currentHeader').subscribe((result) => this.successHeader(result), (error) => console.log(error));
    this.http.get('http://localhost:3000/currentData').subscribe((result) => this.success(result), (error) => console.log(error));
  }

  success(result: any) {
    var jsonObject: any = result;
    console.log(jsonObject);
    this.dataSet = jsonObject;
    this.dataSetChange.emit(this.dataSet)
  }

  successHeader(result: any) {
    var jsonObject: any = result;
    console.log(jsonObject);
    this.headers = jsonObject;
    this.headersChange.emit(this.headers);
  }

}
