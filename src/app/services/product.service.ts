import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }
  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  get(id:any):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  add(product: any):Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/products`, product)
  }
  remove(id:any):Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
  update(product: any):Observable<IProduct>{
    return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }
}
