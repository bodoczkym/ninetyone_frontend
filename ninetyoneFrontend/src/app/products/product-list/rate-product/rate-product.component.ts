import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from '../../../../../node_modules/angular-star-rating';
import { ProductListService } from '../../product-list/product-list.service';
import { AuthService2 } from 'src/app/auth.service';
import { FormBuilder } from '@angular/forms';
import { Feedback } from './../../../Feedback';
import { Product } from 'src/app/Product';
import { isUndefined } from 'util';

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
  feedback: Feedback;
  rate: number;

  // Rate
  @Input() rating: number ;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  myLabelText = 'Rate ';
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;

  // Comment
  rateForm = this.fb.group({
    feedb: ['']
  });
  get feedb() { return this.rateForm.get('feedb'); }



  constructor(public dialogRef: MatDialogRef<RateProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private productListService: ProductListService,
              private authService: AuthService2,
              private fb: FormBuilder) {
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
    this.rate = $event.rating;
    this.getColor($event.rating);
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
    // this.productListService.setRate($event.rating);
  }

  onSubmit() {
    console.log(this.rateForm.value);
    if (this.rateForm.value.feedb !== '' && !isNaN(this.rate)) {
      const feed = new Feedback();
      feed.userId = this.authService.user.id;
      feed.comment = this.rateForm.value.feedb ;
      console.log('F:');
      console.log(feed);
      this.productListService.setRateAndForm(Object.assign(new Feedback(), feed), this.rate);
      this.cancel();
    } else if (!isNaN(this.rate)) {
      this.productListService.setRate(this.rate);
      this.cancel();
    } else {
      console.log('Invalid rating.');
    }
    // this.forumService.addQuestion(Object.assign(new Question(), this.forumForm.value));
  }

  cancel() {
    this.dialogRef.close();
  }

}
