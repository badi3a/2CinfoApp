import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   url= 'http://localhost:3000/products'
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  addProduct(p:Product){
  }
  delete(id:number){

  }
  update(p:Product){

  }
  search(id:number){

  }
}
