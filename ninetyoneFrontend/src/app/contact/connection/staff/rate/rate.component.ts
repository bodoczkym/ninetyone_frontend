import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from '../../../../../../node_modules/angular-star-rating';

import { User } from './../../../../User';

enum COLORS {
  RED = '#DD2C00',
  YELLOW = '#FFCA28',
  GREEN = '#76FF03',
  GREY = '#E0E0E0'
}

@Component({
  selector: 'app-rate',
  templateUrl:  './rate.component.html',
  styleUrls: ['./rate.component.css' ]
})

export class RateComponent implements OnInit {

  @Input() rating: number ;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  myLabelText = 'Rate ';
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;
  user: User;

  constructor(public dialogRef: MatDialogRef<RateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
 }

  ngOnInit() {
  }


 /* rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }*/



  getColor(r: number) {
    switch (r) {
      case 1:
      case 2:
        return COLORS.RED;
      case 3:
        return COLORS.YELLOW;
      case 4:
      case 5:
        return COLORS.GREEN;
      default:
        return COLORS.GREY;
    }
  }


  onClick = ($event: ClickEvent, rating) => {
    this.getColor(rating);
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  }


}

