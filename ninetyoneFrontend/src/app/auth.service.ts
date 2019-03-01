import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  user: User;
  redirectUrl: string;

  private employeeUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }


}
