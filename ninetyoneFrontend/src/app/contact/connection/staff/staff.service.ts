import { Injectable } from '@angular/core';
import { User } from './../../../User';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { httpOptions } from '../../../auth.service';
import 'rxjs/add/operator/map';
import { Contact } from './../../../Contact';

/*
interface FeathersResponse<T> {
    total: number;
    limit: number;
    skip: number;
    data: T[];
}*/
@Injectable({
    providedIn: 'root'
})
export class StaffService {

    private userUrl = 'http://localhost:8080/users';

    user: User;

    constructor(
        private http: HttpClient
    ) { }

    getUser(id: number): Promise<User> {
        return this.http.get<User>(`${this.userUrl}/${id}`).toPromise();
    }

    getUsers(): Promise<User[]> {
        return this.http.get<User[]>(
            this.userUrl,
            httpOptions
        ).toPromise();
    }

    getRate(rate: number) {
        console.log('The rate is: ' + rate);
        this.user.rates = this.user.rates + rate;
        this.user.voters = this.user.voters + 1;
        this.sendRateToService(this.user);
        console.log('The user\'s rate is: ' + (this.user.rates / this.user.voters));
    }

    sendRateToService(user: User): Promise<User> {
        return this.http.put<User>(
          this.userUrl,
          user,
          httpOptions
        ).toPromise();
      }

}
