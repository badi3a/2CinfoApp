import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: string;
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'My Shop App'
  }


}
