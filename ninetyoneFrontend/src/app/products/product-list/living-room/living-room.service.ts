import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './../../../auth.service';
import 'rxjs/add/operator/map';
import { Product } from './../../../Product';

@Injectable({
  providedIn: 'root'
})
export class LivingRoomService {

  private productUrl = 'http://localhost:8080/livingroom';

  constructor(
      private http: HttpClient
  ) { }

  getProduct(id: number): Promise<Product> {
      return this.http.get<Product>(`${this.productUrl}/${id}`).toPromise();
  }

  getProducts(): Promise<Product[]> {
      return this.http.get<Product[]>(
          this.productUrl,
          httpOptions
      ).toPromise();
  }
}
