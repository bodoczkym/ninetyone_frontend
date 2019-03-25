import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import 'rxjs/add/operator/map';
import { Product } from './../../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
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



}
