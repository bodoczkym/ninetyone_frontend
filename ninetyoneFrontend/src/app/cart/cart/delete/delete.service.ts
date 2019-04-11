import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from './../../../auth.service';
import { Purchase } from './../../../Purchase';
import { Product } from './../../../Product';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  deleteProductId: number;
  deleteProductType: string;
  deletePurchaseId: number;

  private cartUrl = 'http://localhost:8080/purchases';
  private bedProductUrl = 'http://localhost:8080/bedroom';
  private bathProductUrl = 'http://localhost:8080/bathroom';
  private kitchenProductUrl = 'http://localhost:8080/kitchen';
  private livingProductUrl = 'http://localhost:8080/living-room';
  private techsProductUrl = 'http://localhost:8080/techs';

  constructor(private http: HttpClient) { }

  deleteProductFromCart(id: number) {
    return this.http.delete<Purchase>(
      `${this.cartUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(
      `http://localhost:8080/${product.type}/${product.id}`,
      product,
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

  getDatas(purchaseId: number, productId: number, productType: string) {
    this.deletePurchaseId = purchaseId;
    this.deleteProductId = productId;
    this.deleteProductType = productType;
  }
}
