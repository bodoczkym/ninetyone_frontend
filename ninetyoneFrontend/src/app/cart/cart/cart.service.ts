import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import { Purchase } from './../../Purchase';
import { Product } from './../../Product';
import { DeleteComponent } from './delete/delete.component';
import { Sold } from 'src/app/Sold';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = 'http://localhost:8080/purchases';
  private bedProductUrl = 'http://localhost:8080/bedroom';
  private bathProductUrl = 'http://localhost:8080/bathroom';
  private kitchenProductUrl = 'http://localhost:8080/kitchen';
  private livingProductUrl = 'http://localhost:8080/living-room';
  private techsProductUrl = 'http://localhost:8080/techs';
  private soldUrl = 'http://localhost:8080/sold';
  private productUrl: string;

  constructor(private http: HttpClient) { }

  getPurchases(id: number): Promise<Purchase[]> {
    return this.http.get<Purchase[]>(
      `${this.cartUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  getTechsProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.techsProductUrl}/${id}`).toPromise();
  }

  getBedProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.bedProductUrl}/${id}`).toPromise();
  }

  getLivingPRoduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.livingProductUrl}/${id}`).toPromise();
  }

  getKitchenProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.kitchenProductUrl}/${id}`).toPromise();
  }

  getBathProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.bathProductUrl}/${id}`).toPromise();
  }

  addNewPurchase(pr: Purchase): Promise<Purchase> {
    return this.http.post<Purchase>(
      this.cartUrl,
      pr,
      httpOptions
    ).toPromise();
  }

  updateProduct(pr: Product) {
    return this.http.put<Product>(
      `http://localhost:8080/${pr.type}/${pr.id}`,
      pr,
      httpOptions
    ).toPromise();
  }

  sold(sold: Sold): Promise<Sold> {
    return this.http.post<Sold>(
      this.soldUrl,
      sold,
      httpOptions
    ).toPromise();
  }

  deletePurchases(id: number) {
    return this.http.delete<Purchase>(
      `${this.cartUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  deleteProduct(pr: Product) {
    if (pr.type === 'livingroom') {
      this.productUrl = 'http://localhost:8080/living-room/' + pr.id;
    } else {
      this.productUrl = 'http://localhost:8080/' + pr.type + '/' + pr.id;
    }
    return this.http.delete<Product>(
      `${this.productUrl}`,
      httpOptions
    ).toPromise();
  }

}
