import { Component, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from './../../Product';
import { AuthService2 } from './../../auth.service';
import { CartService } from './cart.service';
import { Purchase } from 'src/app/Purchase';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { DeleteService } from './delete/delete.service';

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
  ar: any[] = [];
  tableElements: Table[] = [];
  sum = 0;
  newPurchase = new Purchase();
  updateProductWhenAddedToCart: Product;

  constructor(public dialog: MatDialog,
              private cartService: CartService,
              private authService: AuthService2,
              private deleteService: DeleteService) { }

  async ngOnInit() {
    console.log('User id: ' + this.user.id);
    // get purchases
    let z;
    this.helper = await this.cartService.getPurchases(this.user.id);
    for (z in this.helper) {
      if (true) {
        this.purchases.push(this.helper[z]);
      }
    }
    // get products of purchases
    for (z in this.purchases) {
      if (true) {
        await this.getProducts(this.purchases[z].productId, this.purchases[z].productType);
      }
    }
    // helper method
    this.toArray();
    // get tableElements for dataSource for table in the html
    this.getTableElements();
    this.dataSource = this.tableElements;
    this.getSummary();
    this.isLoading = false;
    console.log(this.dataSource);
  }

  ngOnChanges() { }

  addProductToCart(pr: Product) {
    console.log(pr);
    this.newPurchase.productId = pr.id;
    this.newPurchase.productType = pr.type;
    this.newPurchase.user = this.authService.user.id;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    this.newPurchase.createdAt = new Date(dateTime);
    this.newPurchase.updatedAt = new Date(dateTime);
    this.cartService.addNewPurchase(this.newPurchase);
    this.getProductWhenAddedToCart(pr);
  }

  async getProducts(id: number, type: string) {
    if (type === 'bedroom') {
      this.products.push(await this.cartService.getBedProduct(id));
      return await this.cartService.getBedProduct(id);
    } else if (type === 'bathroom') {
      this.products.push(await this.cartService.getBathProduct(id));
      return await this.cartService.getBathProduct(id);
    } else if (type === 'kitchen') {
      this.products.push(await this.cartService.getKitchenProduct(id));
      return await this.cartService.getKitchenProduct(id);
    } else if (type === 'livingroom') {
      this.products.push(await this.cartService.getLivingPRoduct(id));
      return await this.cartService.getLivingPRoduct(id);
    } else if (type === 'techs') {
      this.products.push(await this.cartService.getTechsProduct(id));
      return await this.cartService.getTechsProduct(id);
    }
  }

  toArray() {
    let z;
    for (z in this.purchases) {
      if (true) {
       this.ar[z] = [this.purchases[z].id, this.purchases[z].productId, this.purchases[z].productType,
        this.purchases[z].user, this.purchases[z].createdAt, this.purchases[z].updatedAt, this.products[z].name,
        this.products[z].price];
      }
    }
  }

  getTableElements() {
    let z;
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
  }

  delete(purchaseId: number, productId: number, productType: string): void {
    this.deleteService.getDatas(purchaseId, productId, productType);
    console.log(purchaseId, productId, productType);
    this.deleteDialog();
  }

  deleteDialog() {
    const dialogRef2 = this.dialog.open(DeleteComponent, {

    });
    dialogRef2.afterClosed().subscribe(result => {
      console.log('The delete dialog was closed');
    });
  }

  getSummary() {
    let z;
    for (z in this.products) {
      if (true) {
       this.sum += this.products[z].price;
      }
    }
  }

  async getProductWhenAddedToCart(pr: Product) {
    this.updateProductWhenAddedToCart = await this.getProducts(pr.id, pr.type);
    this.updateProductWhenAddedToCart.inCart += 1;
    this.updateProductWhenAddedToCart.quantity -= 1;
    this.cartService.updateProduct(this.updateProductWhenAddedToCart); // update inCart and quantity
  }

}
