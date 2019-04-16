import { Component, OnInit } from '@angular/core';
import { Sold } from 'src/app/Sold';
import { RiportsService } from '../riports.service';
import { User } from 'src/app/User';
import { container } from '@angular/core/src/render3';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-riports',
  templateUrl: './riports.component.html',
  styleUrls: ['./riports.component.css']
})
export class RiportsComponent implements OnInit {

  bindBy: string;
  sold: Sold[];
  helper = [];
  usersHelper: User[] = [];
  users: User[] = [];
  map = new Map<User, Sold[]>();
  keys;
  keysObject;
  values;
  months = [];
  monthsmap = new Map<number, Sold[]>();

  constructor(private riportsService: RiportsService) { }

  async ngOnInit() {
    // get sold rows from db
    this.sold = await this.riportsService.getSold();
    console.log(this.sold);
    // get users from sold rows
    this.getUsers();

    // get months
    this.getMonths();

  }

  getMonths() {
    let k;
    for (k in this.sold) {
      if (!(this.months.includes(this.sold[k].createdAt))) {
        const helper = new Date(this.sold[k].createdAt);
        console.log('helper: ' + helper);
        const day = helper.getDate();
        console.log('day: ' + day);
        if (!(this.months.includes(day))) {
          this.months.push(day);
        }
      }
    }
    console.log('months:');
    console.log(this.months);
    this.getMonthsWithSold();
  }

  getMonthsWithSold() {
    let k;
    let i;
    for (k in this.sold) {
      if (true) {
        for (i in this.months) {
          if (this.months[i] === (new Date(this.sold[k].createdAt).getDate())) {
            this.monthsmap.set(this.months[i], (this.monthsmap.get(this.months[i]) || []).concat([this.sold[k]]));
          }
        }
      }
    }
    console.log(this.monthsmap);
  }

  async getUsers() {
    let k;
    for (k in this.sold) {
      if (true) {
        this.helper = await this.riportsService.getUsers(this.sold[k].userId);
        this.usersHelper.push(Object.assign(new User(), this.helper));
      }
    }
    const map = new Map();
    for (const item of this.usersHelper) {
      if (!map.has(item.id)) {
        map.set(item.id, true);    // set any value to Map
        this.users.push(item);
      }
    }
    console.log(this.users);
    this.getMap();
  }

  getMap() {
    let k;
    let i;
    for (k in this.sold) {
      if (true) {
        for (i in this.users) {
          if (this.users[i].id === this.sold[k].userId) {
            this.map.set(this.users[i], (this.map.get(this.users[i]) || []).concat([this.sold[k]]));
          }
        }
      }
    }
   //  this.getKeys();
  }
/*
  getKeys() {
    this.keys = this.map.keys();
    console.log('keys:');
    console.log(this.map.keys());
  }

  getValues(key: User) {
    console.log(key);
    this.values = [];
    this.values = this.map.get(key);
    console.log('map values:');
    console.log(this.values);
    return this.values;
  }*/

}
