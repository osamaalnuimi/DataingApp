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
  constructor() {}
  ngOnInit(): void {}
  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }
  cancelRegistterMode(event: boolean): void {
    this.registerMode = event;
  }
}
