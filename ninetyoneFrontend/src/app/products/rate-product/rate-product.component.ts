import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from '../../../../node_modules/angular-star-rating';
import { ProductListService } from '../product-list/product-list.service';

enum COLORS {
  RED = '#DD2C00',
  YELLOW = '#FFCA28',
  GREEN = '#76FF03',
  GREY = '#E0E0E0'
}

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.css']
})
export class RateProductComponent implements OnInit {

  @Input() rating: number ;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  myLabelText = 'Rate ';
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;

  constructor(public dialogRef: MatDialogRef<RateProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private productListService: ProductListService) {
 }

  ngOnInit() {
  }

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
    this.getColor($event.rating);
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
    this.productListService.getRate($event.rating);
  }

}
