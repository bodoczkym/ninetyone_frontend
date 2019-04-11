import { Component, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from './../../Product';
import { AuthService2 } from './../../auth.service';
import { CartService } from './cart.service';
import { Purchase } from 'src/app/Purchase';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataSource } from './../../DataSource';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

export interface Table {
  purchaseId: number;
  productId: number;
  productType: string;
  user: number;
  createdAt: Date;
  updatedAt: Date;
  productName: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  products: Product[] = [];
  user = this.authService.user;
  helper;
  purchases: Purchase[] = [];
  dataSource: any[] = [];
  displayedColumns: string[] = ['Product name', 'Type', 'Created at', 'Price', 'Modify'];
  isLoading = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  bedProducts: Product[] = [];
  techsProducts: Product[] = [];
  bathProducts: Product[] = [];
  livingProducts: Product[] = [];
  kitchenProducts: Product[] = [];
  ar: any[] = [];
  tableElements: Table[] = [];

  constructor(private cartService: CartService,
              private authService: AuthService2) { }

  async ngOnInit() {
    console.log('User: ' + this.user.id);
    // get purchases
    let z;
    this.helper = await this.cartService.getPurchases(this.user.id);
    for (z in this.helper) {
      if (true) {
        this.purchases.push(this.helper[z]);
      }
    }

    // get given products
    for (z in this.purchases) {
      if (true) {
        await this.getProducts(this.purchases[z].productId, this.purchases[z].productType);
      }
    }

    this.getArray();

    let x;
    for (x in this.ar) {
      if (true) {
        console.log('Array: ' + this.ar);

      }
    }

    this.isLoading = false;

    for (z in this.ar) {
      if (true) {
        this.tableElements[z] = this.ar[z];
        this.tableElements[z].purchaseId = this.ar[z][0];
        this.tableElements[z].productId = this.ar[z][1];
        this.tableElements[z].productType = this.ar[z][2];
        this.tableElements[z].user = this.ar[z][3];
        this.tableElements[z].createdAt = this.ar[z][4];
        this.tableElements[z].updatedAt = this.ar[z][5];
        this.tableElements[z].productName = this.ar[z][6];
        this.tableElements[z].price = this.ar[z][7];
      }
    }

    this.dataSource = this.tableElements;
    console.log(this.dataSource);
  }

  /*AfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadLessonsPage())
        )
        .subscribe();
}

loadLessonsPage() {
    this.dataSource.loadLessons(
        this.course.id,
        '',
        'asc',
        this.paginator.pageIndex,
        this.paginator.pageSize);
}*/

  ngOnChanges() {

  }

  addProduct(pr: Product) {
    console.log(pr);
    this.products.push(pr);
  }

  async getProducts(id: number, type: string) {
    if (type === 'bedroom') {
      // this.bedProducts.push(await this.cartService.getBedProduct(id));
      this.products.push(await this.cartService.getBedProduct(id));
      // console.log(this.bedProducts);
    } else if (type === 'bathroom') {
      // this.bathProducts.push(await this.cartService.getBathProduct(id));
      this.products.push(await this.cartService.getBathProduct(id));
      // console.log(this.bathProducts);
    } else if (type === 'kitchen') {
      // this.kitchenProducts.push(await this.cartService.getKitchenProduct(id));
      this.products.push(await this.cartService.getKitchenProduct(id));
      // console.log(this.kitchenProducts);
    } else if (type === 'livingroom') {
      // this.livingProducts.push(await this.cartService.getLivingPRoduct(id));
      this.products.push(await this.cartService.getLivingPRoduct(id));
      // console.log(this.livingProducts);
    } else if (type === 'techs') {
      // this.techsProducts.push(await this.cartService.getTechsProduct(id));
      this.products.push(await this.cartService.getTechsProduct(id));
      // console.log(this.techsProducts);
    }
  }

  getArray() {
    let z;
    for (z in this.purchases) {
      if (true) {
       this.ar[z] = [this.purchases[z].id, this.purchases[z].productId, this.purchases[z].productType,
        this.purchases[z].user, this.purchases[z].createdAt, this.purchases[z].updatedAt, this.products[z].name,
        this.products[z].price];
      }
    }
  }

}
