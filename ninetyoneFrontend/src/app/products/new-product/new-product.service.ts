import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import 'rxjs/add/operator/map';
import { Product } from './../../Product';
import { getUrlScheme } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {
  productUrl: string;

  constructor(private http: HttpClient) { }

  new(pr: Product): Promise<Product> {
    this.getUrl(pr);
    return this.http.post<Product>(
      `${this.productUrl}`,
      pr,
      httpOptions
    ).toPromise();
  }

  getUrl(pr: Product) {
    console.log(pr.type);
    if (pr.type === 'livingroom') {
      this.productUrl = 'http://localhost:8080/living-room/';
    } else {
      this.productUrl = 'http://localhost:8080/' + pr.type + '/';
    }
  }
}
