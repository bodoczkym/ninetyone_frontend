import { Component, OnInit } from '@angular/core';
import { SingleProductService } from './single-product.service';
import { Product } from 'src/app/Product';
import { CartComponent } from './../../../cart/cart/cart.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product: Product;
  filters = [];
  str = '';

  constructor(private singleProductService: SingleProductService,
              private cartComponent: CartComponent) { }

  async ngOnInit() {
    this.product = await this.singleProductService.getProduct();
    this.splitFilters(this.product);
  }

  splitFilters(prod: Product) {
    this.filters = prod.filters.split(':');
    this.filtersToString();
  }

  filtersToString() {
    let f = [];
    for ( f of this.filters) {
      this.str += f + ', ';
    }
    this. str = this.str.slice(0, this.str.length - 2);
  }

  addToCart() {
    this.cartComponent.addProductToCart(this.product);
  }


}
