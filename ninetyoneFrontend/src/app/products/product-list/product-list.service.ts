import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import 'rxjs/add/operator/map';
import { Product } from './../../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  product: Product;
  productUrl: string;

  private bedProductUrl = 'http://localhost:8080/bedroom';
  private bathProductUrl = 'http://localhost:8080/bathroom';
  private kitchenProductUrl = 'http://localhost:8080/kitchen';
  private livingProductUrl = 'http://localhost:8080/living-room';
  private techsProductUrl = 'http://localhost:8080/techs';


  constructor(
    private http: HttpClient
  ) { }


  getBedProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.bedProductUrl}/${id}`).toPromise();
  }

  getBedProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(
      this.bedProductUrl,
      httpOptions
    ).toPromise();
  }

  /* kitchen */
  getKitchenProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.kitchenProductUrl}/${id}`).toPromise();
  }

  getKitchenProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(
      this.kitchenProductUrl,
      httpOptions
    ).toPromise();
  }

  /* living */
  getLivingProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.livingProductUrl}/${id}`).toPromise();
  }

  getLivingProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(
      this.livingProductUrl,
      httpOptions
    ).toPromise();
  }

  /* bath */
  getBathProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.bathProductUrl}/${id}`).toPromise();
  }

  getBathProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(
      this.bathProductUrl,
      httpOptions
    ).toPromise();
  }

  /* techs */
  getTechsProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.techsProductUrl}/${id}`).toPromise();
  }

  getTechsProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(
      this.techsProductUrl,
      httpOptions
    ).toPromise();
  }

  getRate(rate: number) {
    console.log('The rate is: ' + rate);
    this.product.voters = this.product.voters + 1;
    this.product.rate = this.product.rate + rate;
    console.log('The product\'s rate is: ' + (this.product.rate / this.product.voters));
    if (this.product.type === 'livingroom') {
      this.productUrl = 'http://localhost:8080/living-room';
    } else {
      this.productUrl = 'http://localhost:8080/' + this.product.type;
    }
    this.sendRateToService(this.product);
  }

  sendRateToService(pr: Product): Promise<Product> {
    return this.http.put<Product>(
      `${this.productUrl}/${pr.id}`,
      pr,
      httpOptions
    ).toPromise();
  }
/*
  public getProduct(pr: Product) {
    this.product = new Product();
    this.product.id = pr.id;
    this.product.name = pr.name;
    this.product.filters = pr.filters;
    this.product.img = pr.img;
    this.product.inCart = pr.inCart;
    this.product.price = pr.price;
    this.product.quantity = pr.quantity;
    this.product.rate = pr.rate;
    this.product.stocknumber = pr.stocknumber;
    this.product.type = pr.type;
    this.product.updatedAt = pr.updatedAt;
    this.product.voters = pr.voters;
    this.product.description = pr.description;
    this.product.createdAt = pr.createdAt;
    console.log(this.product.rate);
    this.proba = this.product;
  }*/
}
