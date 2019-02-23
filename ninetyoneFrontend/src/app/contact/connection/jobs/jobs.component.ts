import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }

  navLinks = [
    {
        label: 'Contact info',
        link: '../info',
        index: 0
    },
    {
        label: 'Apply for job',
        link: '../jobs',
        index: 1
    },
    {
        label: 'Staff',
        link: '../staff',
        index: 2
    },
    {
        label: 'Send note about the website',
        link: '../note',
        index: 3
    }
 ];

  ngOnInit() {
  }

}
