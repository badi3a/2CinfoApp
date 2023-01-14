import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
     private route:Router) {

  }
  ngOnInit(): void {
    this.product = new Product()
  }
  saveProduct(){
    this.product.nbrLike=0;
    //this.productService.list.push(this.product)
    this.route.navigate(['/list']);
    //console.log(this.productService.list)
  }

}
