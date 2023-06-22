import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private _accountService: AccountService) {}
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(): void {
    const user = localStorage.getItem('user');
    if (!user) return;
    this._accountService.setCurrentUser(JSON.parse(user));
  }
}
export interface IUser {
  userName?: string;
  Id?: number;
}
