import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product;
  action: string;

  constructor(private productService: ProductService,
     private route:Router,
      private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    let id=this.activatedRoute.snapshot.params['id']
    this.product = new Product()
    this.action="add"
    if(id!=null){
      this.action="update"
      this.productService.search(id).subscribe(
        (response:Product)=>{this.product=response}
      )
    }
  }
  saveProduct(){
    if(this.action==="add"){
    this.product.nbrLike=0;
    //this.productService.list.push(this.product)
    this.productService.addProduct(this.product).subscribe(
      ()=>{this.route.navigate(['/list']);}
    )
    //console.log(this.productService.list)
  }else{
    this.productService.update(this.product).subscribe(
      ()=>{this.route.navigate(['/list']);}
    )
  }
}


}
