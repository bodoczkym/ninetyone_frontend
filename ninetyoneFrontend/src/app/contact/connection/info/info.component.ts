import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  title = 'My first AGM project';
  lat = 46.213719;
  lng = 19.375383;

  constructor() { }

  ngOnInit() {
  }

/*
  noChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longtitude = event.coords.lng;
  }*/

}
