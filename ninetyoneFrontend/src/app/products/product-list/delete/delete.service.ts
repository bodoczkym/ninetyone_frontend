import { Injectable } from '@angular/core';
import { Product } from './../../../Product';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './../../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private productUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  getUrl(type: string, id: number) {
    console.log(type);
    if (type === 'livingroom') {
      this.productUrl = 'http://localhost:8080/living-room/' + id;
    } else {
      this.productUrl = 'http://localhost:8080/' + type + '/' + id;
    }

  }

  getProduct(): Promise<Product> {
    return this.http.get<Product>(`${this.productUrl}`).toPromise();
  }

  deleteProduct(pr: Product) {
    return this.http.delete<Product>(
      `${this.productUrl}`,
      httpOptions
    ).toPromise();
  }


}
