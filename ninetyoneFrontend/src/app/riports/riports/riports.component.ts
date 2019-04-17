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
  typesAndCounters = new Map<number, Map<string, number>>();

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
        const day = helper.getDate();
        if (!(this.months.includes(day))) {
          this.months.push(day);
        }
      }
    }
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
    this.getMonthsWithCounter();
  }

  getMonthsWithCounter() {
    let monthsHelper;
    let l;
    for (let i = 0; i < this.months.length; i++) {
      console.log('l: ' + this.months[i]);
      monthsHelper = this.monthsmap.get(this.months[i]);
      for (l in monthsHelper) {
        if (this.typesAndCounters.has(this.months[i])) {
          if (this.typesAndCounters.get(this.months[i]).has(monthsHelper[l].type)) {
            console.log('1');
            this.typesAndCounters.get(this.months[i]).set(monthsHelper[l].type,
              this.typesAndCounters.get(this.months[i]).get(monthsHelper[l].type) + 1);
          } else {
            console.log('2');
            this.typesAndCounters.get(this.months[i]).set(monthsHelper[l].type, 1);
          }
        } else {
          console.log('3');
          this.typesAndCounters.set(this.months[i], new Map());
          this.typesAndCounters.get(this.months[i]).set(monthsHelper[l].type, 1);
          console.log(this.typesAndCounters);
        }
      }
    }
    console.log(this.typesAndCounters);
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
  }


}
