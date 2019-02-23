import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private userUrl = 'http://localhost:8080/users';
    private users  = [];

    constructor(private http: HttpClient) { }

  /*  get_products() {
        return this.http.get(this.userUrl);
    }

    getEmployees() {
        return this.http.get(this.userUrl).subscribe((res: any[]) => {
            console.log(res);
            this.users = res;
        });
    }*/

}
