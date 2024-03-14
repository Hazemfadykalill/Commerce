import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {

  constructor(private _HttpClient:HttpClient) { }

  // gat All orders
  allOrders():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/orders/");

  }
}
