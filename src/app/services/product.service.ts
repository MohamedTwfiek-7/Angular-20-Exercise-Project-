import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
