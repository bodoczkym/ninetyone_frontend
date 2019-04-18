import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import 'rxjs/add/operator/map';
import { Product } from './../../Product';
import { Feedback } from 'src/app/Feedback';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  product: Product;
  productUrl: string;
  rate: number;
  feedback: Feedback;

  private bedProductUrl = 'http://localhost:8080/bedroom';
  private bathProductUrl = 'http://localhost:8080/bathroom';
  private kitchenProductUrl = 'http://localhost:8080/kitchen';
  private livingProductUrl = 'http://localhost:8080/living-room';
  private techsProductUrl = 'http://localhost:8080/techs';
  private feedbackUrl = 'http://localhost:8080/feedbacks';


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

  /* feedbacks */
  getFeedbacks(): Promise<Feedback[]> {
    return this.http.get<Feedback[]>(
      this.feedbackUrl,
      httpOptions
    ).toPromise();
  }

  /* send rate  */

  setRate(rate: number) {
    this.rate = rate;
    this.product.voters = this.product.voters + 1;
    this.product.rate = this.product.rate + this.rate;
    console.log('The product\'s rate is: ' + (this.product.rate / this.product.voters));
    if (this.product.type === 'livingroom') {
      this.productUrl = 'http://localhost:8080/living-room';
    } else {
      this.productUrl = 'http://localhost:8080/' + this.product.type;
    }
    this.sendRate(this.product);
  }

  setRateAndForm(feedback: Feedback, rate: number) {
    this.setRate(rate);
    this.sendFeedback(feedback);
  }

  sendRate(pr: Product): Promise<Product> {
    return this.http.put<Product>(
      `${this.productUrl}/${pr.id}`,
      pr,
      httpOptions
    ).toPromise();
  }

  sendFeedback(feedback: Feedback): Promise<Feedback> {
    this.feedback = feedback;
   // this.getId(feedback);
    console.log(this.feedback);
    return this.http.post<Feedback>(
      `${this.feedbackUrl}`,
      this.feedback,
      httpOptions
    ).toPromise();
  }

  getId(f: Feedback) {
    if (this.product.type === 'bedroom') {
      this.feedback.bedroomId = this.product.id;
    } else if (this.product.type === 'bathroom') {
      this.feedback.bathroomId = this.product.id;
    } else if (this.product.type === 'livingroom') {
      this.feedback.livingroomId = this.product.id;
    } else if (this.product.type === 'kitchen') {
      this.feedback.kitchenId = this.product.id;
    } else if (this.product.type === 'techs') {
      this.feedback.techsId = this.product.id;
    }
  }
}
