import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import 'rxjs/add/operator/map';
import { Product } from './../../Product';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {

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

  getProduct(): Promise<Product> {return this.http.get<Product>(`${this.productUrl}`).toPromise();
  }

  modify(pr: Product): Promise<Product> {
    return this.http.put<Product>(
      `${this.productUrl}`,
      pr,
      httpOptions
    ).toPromise();
}

}
