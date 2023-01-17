import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   url= environment.url+'products/'
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
  addProduct(p:Product){
    return this.http.post(this.url,p)
  }
  delete(id:number){
      return this.http.delete(this.url+id)
  }
  update(p:Product){
    return this.http.put(this.url+p.id,p)
  }
  search(id:number){
    return this.http.get<Product>(this.url+id)
  }
}
