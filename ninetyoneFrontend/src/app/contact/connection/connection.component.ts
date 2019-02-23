import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

    constructor(private location: Location) { }

    navLinks = [
        {
            label: 'Contact info',
            link: './connect/info',
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
    }
   /* f(e) {
        this.location.replaceState(this.navLinks[e.index].link);
    }*/
}

