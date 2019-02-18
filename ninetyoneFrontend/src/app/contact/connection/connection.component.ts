import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  constructor() {}

  navLinks = [
      {
          label: 'Contact info',
          link: './availability',
          index: 0
      },
      {
          label: 'Apply for job',
          link: './jobs',
          index: 1
      },
      {
          label: 'Staff',
          link: './staff',
          index: 2
      },
      {
          label: 'Send note about the website',
          link: './note',
          index: 3
      }
   ];



  ngOnInit() {
    /*this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });*/
  }

}

