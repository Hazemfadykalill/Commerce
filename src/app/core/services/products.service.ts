import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }
  mainURL:string="https://ecommerce.routemisr.com"
  baseURL:string="/api/v1/"
  // all products
  getAllProduct():Observable<any>{
    return this._httpClient.get(this.mainURL+this.baseURL+'products')
  }

  // limit product
  getProductByPage(pageNumber:number=1):Observable<any>{
    return this._httpClient.get(this.mainURL+this.baseURL+`products?page=${pageNumber}`)
  }


}
