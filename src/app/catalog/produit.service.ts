import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/catalog/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> { /* celui qui connecte avec la base */
    return this.http.get<IProduct[]>('/api/products');
  }
}