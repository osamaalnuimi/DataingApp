import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: IUser[] = new Array();
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this.getUsers();
  }
  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }
  getUsers(): void {
    this._http.get('https://localhost:7178/api/users').subscribe((response) => {
      this.users = response as IUser[];
    });
  }
  cancelRegistterMode(event: boolean): void {
    this.registerMode = event;
  }
}
