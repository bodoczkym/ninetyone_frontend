import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListService } from './product-list.service';
import { Product } from './../../Product';
import { } from 'ng2-nouislider';
import { Options, LabelType } from 'ng5-slider';
import { ProductFilterFilterPipe } from './product-filter-filter.pipe';
import { SingleProductService } from './single-product/single-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService2 } from './../../auth.service';
import { EditProductService } from './../edit-product/edit-product.service';
import { DeleteComponent } from './../delete/delete.component';
import { DeleteService } from './../delete/delete.service';
import { CartComponent } from './../../cart/cart/cart.component';
import { RateProductComponent } from './rate-product/rate-product.component';
import { RateComponent } from 'src/app/contact/connection/staff/rate/rate.component';

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

  products = [];
  bedProducts: Product[];
  kitchenProducts: Product[];
  livingProducts: Product[];
  bathProducts: Product[];
  techsProducts: Product[];

  searchTerm: string;
  isLoading = true;

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

  tempProduct: Product;

  constructor(public dialog: MatDialog,
              private productListService: ProductListService,
              private singleProductService: SingleProductService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService2,
              private editProductService: EditProductService,
              private deleteService: DeleteService,
              private cartComponent: CartComponent) {
  }

  async ngOnInit() {
    // get products
    this.bedProducts = await this.productListService.getBedProducts();
    this.products.push(this.bedProducts);
    this.kitchenProducts = await this.productListService.getKitchenProducts();
    this.products.push(this.kitchenProducts);
    this.livingProducts = await this.productListService.getLivingProducts();
    this.products.push(this.livingProducts);
    this.bathProducts = await this.productListService.getBathProducts();
    this.products.push(this.bathProducts);
    this.techsProducts = await this.productListService.getTechsProducts();
    this.products.push(this.techsProducts);
    this.isLoading = false;
    console.log(this.products);
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

  getMinMaxPrice(products) {
    let localMaxPrice = 0;
    let localMinPrice = 0;
    let i: number;
    for (i = 0; i < products.length; i++) {
      for (const pr of products[i]) {
        if (pr.price > localMaxPrice) {
          localMaxPrice = pr.price;
        }
        if (pr.price < localMinPrice) {
          localMinPrice = pr.price;
        }
      }
    }
    this.maxPrice = localMaxPrice;
    this.minPrice = localMinPrice;
    console.log(this.maxPrice);
    console.log(this.minPrice);
  }

  splitAndStore(products) {
    let array = [];
    let i: number;
    for (i = 0; i < products.length; i++) {
      for (const pr of products[i]) {
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
    }
    console.log(array);
    console.log('filter:' + this.filters);
    return this.filters;
  }

  openSingleProductPage(product: Product) {
    this.singleProductService.getUrl(product.type, product.id);
    // route
    this.router.navigate(['/products/' + product.type + '/' + product.id]);
  }

  openEdit(product: Product) {
    this.editProductService.getUrl(product.type, product.id);
    // route
  }

  delete(pr: Product): void {
    this.deleteService.getUrl(pr.type, pr.id);
    const dialogRef2 = this.dialog.open(DeleteComponent, {

    });
    dialogRef2.afterClosed().subscribe(result => {
      console.log('The delete dialog was closed');
    });
  }


  addToCart(pr: Product) {
    this.cartComponent.addProductToCart(pr);
  }


  rate(pr: Product) {
    console.log('0');
    this.productListService.product = pr;
    console.log(this.productListService.product);
    const dialogRef2 = this.dialog.open(RateProductComponent, {

    });
    dialogRef2.afterClosed().subscribe(result => {
      console.log('The rate dialog was closed');
    });
  }



}
