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

}
