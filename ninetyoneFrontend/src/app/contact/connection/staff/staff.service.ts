import { Injectable } from '@angular/core';
import { User } from './../../../User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from '../../../auth.service';
import 'rxjs/add/operator/map';


interface FeathersResponse<T> {
    total: number;
    limit: number;
    skip: number;
    data: T[];
}
@Injectable({
    providedIn: 'root'
})
export class StaffService {

    private issueUrl = 'http://localhost:8080/users';


    constructor(
        private http: HttpClient
    ) { }

    getIssue(id: number): Promise<User> {
        return this.http.get<User>(`${this.issueUrl}/${id}`).toPromise();
    }

    getIssues(): Promise<User[]> {
        /*return this.http.get<FeathersResponse<User>>(this.issueUrl)
          .map(response => response.data)
          .toPromise();*/
        return this.http.get<User[]>(
            this.issueUrl,
            httpOptions
        ).toPromise();
    }


    /* get_products() {
         return this.http.get(this.userUrl);
     }

     getEmployees() {
         return this.http.get(this.userUrl).subscribe((res: any[]) => {
             console.log(res);
             this.users = res;
         });
     }*/

}
