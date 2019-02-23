import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

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
