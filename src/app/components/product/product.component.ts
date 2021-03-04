import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: any;
  product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData()
  {
    this.productService.getProductsData().subscribe(res => {
      this.products = res;
    });
  }

  insertProductsData()
  {
    this.productService.insertProductsData(this.product).subscribe(res => {
      this.getProductsData();
    })
  }

  deleteProductsData(id)
  {
    this.productService.deleteProductsData(id).subscribe(res => {
      this.getProductsData();
    })
  }
}
