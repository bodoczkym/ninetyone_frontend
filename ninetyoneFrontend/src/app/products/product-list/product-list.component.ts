import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListService } from './product-list.service';
import { Product } from './../../Product';
import { } from 'ng2-nouislider';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  minPrice = 0;
  maxPrice = 0;

  filters = [];
  products: Product[];
  searchTerm: string;

  value: number;
  highValue: number;
  options: Options;

  rateValue = 5;
  rateOptions: Options = {
    floor: 1,
    ceil: 5,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  constructor(public dialog: MatDialog,
              private productListService: ProductListService) {
               }

  async ngOnInit() {
    // get products
    this.products = await this.productListService.getProducts();
    // get filters to checkbox
    this.splitAndStore(this.products);
    // get min and max prices to ng5 sliders
    this.getMinMaxPrice(this.products);
    this.getSliderValues();
  }

  getSliderValues() {
    this.value = this.minPrice;
    this.highValue = this.maxPrice;
    this.options = {
      floor: this.minPrice,
      ceil: this.maxPrice,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b style="color: white; font-size: 14px;">$' + value + '</b>';
          case LabelType.High:
            return '<b style="color: white; font-size: 14px;">$' + value + '</b>';
          default:
            return '$' + value;
        }
      }
    };
  }

  getMinMaxPrice(products: Product[]) {
    let localMaxPrice = 0;
    let localMinPrice = 0;
    for (const pr of products) {
      if (pr.price > localMaxPrice) {
        localMaxPrice = pr.price;
      }
      if ( pr.price < localMinPrice) {
        localMinPrice = pr.price;
      }
    }
    this.maxPrice = localMaxPrice;
    this.minPrice = localMinPrice;
    console.log(this.maxPrice);
    console.log(this.minPrice);
  }

  splitAndStore(products: Product[]) {
    let array = [];
    for (const pr of products) {
      array = pr.filters.split(':');
      for (const f of array) {
        if (this.filters.length === 0) {
          this.filters.push(f);
        }
        if (!this.filters.includes(f)) {
          this.filters.push(f);
        }
      }
    }
    console.log(array);
    console.log('filter:' + this.filters);
    return this.filters;
  }



  /*
    rate(): void {
      const dialogRef2 = this.dialog.open(RateComponent, {

      });

      dialogRef2.afterClosed().subscribe(result => {
        console.log('The rate dialog was closed');
      });
    }*/



}
