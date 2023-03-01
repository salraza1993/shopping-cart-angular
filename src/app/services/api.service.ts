import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductInterface, ProductResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public data: ProductInterface[] = []
  public cart_products: ProductInterface[] = []

  public getProduct(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>('https://dummyjson.com/products')
  }
}
