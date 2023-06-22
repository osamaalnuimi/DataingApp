import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ICurrentUser } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:7178/api/';
  private _currentUserSource = new BehaviorSubject<ICurrentUser | null>(null);
  currentUser$ = this._currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http
      .post<ICurrentUser>(this.baseUrl + 'account/login', model)
      .pipe(
        map((response: ICurrentUser) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this._currentUserSource.next(user);
          }
        })
      );
  }
  register(model: any) {
    return this.http
      .post<ICurrentUser>(this.baseUrl + 'account/register', model)
      .pipe(
        map((response: ICurrentUser) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this._currentUserSource.next(user);
          }
          return user;
        })
      );
  }
  setCurrentUser(user: ICurrentUser): void {
    this._currentUserSource.next(user);
  }
  logout(): void {
    this._currentUserSource.next(null);
    localStorage.removeItem('user');
  }
}
