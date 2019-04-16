import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../auth.service';
import { Sold } from 'src/app/Sold';
import { User } from '../users/User';

@Injectable({
  providedIn: 'root'
})
export class RiportsService {

  private soldUrl = 'http://localhost:8080/sold';
  private userUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getSold(): Promise<Sold[]> {
    return this.http.get<Sold[]>(
      this.soldUrl,
      httpOptions
    ).toPromise();
  }

  getUsers(id: number): Promise<User[]> {
    return this.http.get<User[]>(
      `${this.userUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

}
