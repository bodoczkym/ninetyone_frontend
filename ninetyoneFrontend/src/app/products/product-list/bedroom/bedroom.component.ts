import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BedroomService } from './bedroom.service';
import { Product } from './../../../Product';
import { } from 'ng2-nouislider';
import { Options, LabelType } from 'ng5-slider';
import { ProductFilterFilterPipe } from './../product-filter-filter.pipe';
import { SingleProductService } from './../single-product/single-product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-living-room',
  templateUrl: './../product-list.component.html',
  styleUrls: ['./../product-list.component.css']
})
export class BedroomComponent implements OnInit {

  minPrice = 0;
  maxPrice = 0;

  filters = [];
  products: Product[];
  searchTerm: string;

  value: number;
  highValue: number;
  options: Options;

  checkBoxFilter: string;

  rateValue = 5;
  rateOptions: Options = {
    floor: 1,
    ceil: 5,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  constructor(public dialog: MatDialog,
              private bedroomService: BedroomService,
              private singleProductService: SingleProductService,
              private route: ActivatedRoute,
              private router: Router) {
               }

  async ngOnInit() {
    // get products
    this.products = await this.bedroomService.getProducts();
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

  openSingleProductPage(product: Product) {
    this.singleProductService.getUrl(product.type, product.stocknumber);
    // route
    this.router.navigate(['/products/' + product.type + '/' + product.stocknumber]);
  }

}
