import { Component, OnInit } from '@angular/core';
import { SingleProductService } from './single-product.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product: Product;
  filters = [];
  str: string;

  constructor(private singleProductService: SingleProductService) { }

  async ngOnInit() {
    this.product = await this.singleProductService.getProduct();
    this.splitFilters(this.product);
  }

  splitFilters(prod: Product) {
    console.log(prod.filters);
    this.filters = prod.filters.split(':');
    this.filtersToString();
  }

  filtersToString() {
    let f = [];
    for ( f of this.filters) {
          this.str += f + ', ';
    }
    this.str.slice(0, -2);
    console.log(this.str);
  }


}
