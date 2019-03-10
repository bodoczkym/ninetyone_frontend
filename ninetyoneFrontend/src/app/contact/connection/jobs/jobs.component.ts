import { Component, OnInit } from '@angular/core';
import { Job } from './../../../Job';
import { JobsService } from './jobs.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor( private jobsService: JobsService) { }

  async ngOnInit() {
        this.jobs = await this.jobsService.getJobs();
  }

}
