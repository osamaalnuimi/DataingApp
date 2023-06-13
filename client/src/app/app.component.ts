import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  users: IUser[] = new Array();
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._http.get('https://localhost:7178/api/users').subscribe((response) => {
      this.users = response as IUser[];
    });
  }
}
export interface IUser {
  userName?: string;
  Id?: number;
}
