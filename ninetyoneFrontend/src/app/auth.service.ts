import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isEmployee = false;
  user: User;
  redirectUrl: string;
  bcryptPassword: string;
  private usersUrl = 'http://localhost:8080/users';

  constructor( private http: HttpClient ) { }

  async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
    try {
      const user = await this.http.post<User>(
        `${this.usersUrl}/login`,
        {},
        httpOptions
      ).toPromise();

      this.isLoggedIn = true;
      this.user = user;
      if (user.role === 'ROLE_OWNER') {
        this.isEmployee = true;
      }
      return Promise.resolve(true);
    } catch (e) {
      console.log('Error in login!', e);
      return Promise.resolve(false);
    }
  }


  logout() {
    this.isLoggedIn = false;
    this.isEmployee = false;
    this.user = null;
    this.redirectUrl = null;
  }


  async register(user: User): Promise<User> {
    const token = btoa(`${user.username}:${user.password}`);
    this.bcryptPassword = btoa(user.password);
    console.log(this.bcryptPassword);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        ''
      );
    try {
      return this.http.post<User>(
        `${this.usersUrl}/register`,
        user,
        httpOptions
      ).toPromise();
    } catch (e) {
      console.log('Error in register!', e);
      return null;
    }
  }


}
