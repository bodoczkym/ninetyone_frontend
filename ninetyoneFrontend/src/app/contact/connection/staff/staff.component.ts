import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  constructor() {   }

  navLinks = [
    {
      label: 'Contact info',
      link: '../availability',
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

  async ngOnInit() {
  }

}
