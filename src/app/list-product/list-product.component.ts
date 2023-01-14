import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],

})
export class ListProductComponent implements OnInit {
  public title: string;
  public list: Product[];
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.title = 'My Shop App';
    this.productService.getAll().subscribe(
      (response:Product[])=>{this.list=response}
    )

  }

  incrementLike(product:Product){
   //cnx BackEnd
    let i=this.list.indexOf(product)
    if(i!=-1){
      this.list[i].nbrLike++
    }
  }
  buyProduct(product:Product){
    //cnx BackEnd
     let i=this.list.indexOf(product)
     if(i!=-1){
       this.list[i].quantity--
     }
   }


}
