import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }

  insertProductsData(Product)
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/products', Product);
  }

  deleteProductsData(id)
  {
    return this.httpClient.delete('http://127.0.0.1:8000/api/products/'+id);
  }
}
