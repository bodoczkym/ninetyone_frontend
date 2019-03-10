import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { httpOptions } from '../../../auth.service';
import 'rxjs/add/operator/map';
import { Job } from './../../../Job';
import { JobsComponent } from './jobs.component';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobsUrl = 'http://localhost:8080/jobs';


  constructor(
      private http: HttpClient
  ) { }

  getJob(id: number): Promise<Job> {
      return this.http.get<Job>(`${this.jobsUrl}/${id}`).toPromise();
  }

  getJobs(): Promise<Job[]> {
      return this.http.get<Job[]>(
          this.jobsUrl,
          httpOptions
      ).toPromise();
  }
}
