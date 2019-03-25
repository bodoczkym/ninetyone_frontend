import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

    title = 'My first AGM project';
    lat = 46.213719;
    lng = 19.375383;

    constructor() { }

    ngOnInit() {
    }
   /* f(e) {
        this.location.replaceState(this.navLinks[e.index].link);
    }*/
}

