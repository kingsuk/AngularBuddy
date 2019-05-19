import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router"


interface Reminder {
  reminderText: string;
  reminderDateTime:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headers: string[];

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit() {
    //this.http.get('http://localhost:3000/dataType').subscribe((result) => this.success(result), (error) => console.log(error));
    //this.http.get('http://localhost:3000/currentHeader').subscribe((result) => this.successHeader(result), (error) => console.log(error));

  }

  // success(result: any) {
  //   var jsonObject: any = result;
  //   console.log(jsonObject[0]);
  //   this.router.navigate(['/'+jsonObject[0]])
  // }

  // successHeader(result: any) {
  //   var jsonObject: any = result;
  //   console.log(jsonObject);
  //   this.headers = jsonObject;
  // }
}
