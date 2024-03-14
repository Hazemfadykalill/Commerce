import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShippingAddress } from '../interfaces/shipping-address';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }

  // payment online

  // https://ecommerce.routemisr.com/api/v1/orders/checkout-session/65d5e3179c86f6003429bacd?url=http://localhost:3000


 // {
  //   "shippingAddress":{
  //     "details": "details",
  //     "phone": "01010700999",
  //     "city": "Cairo"
  //     }}

  headersToken: any = { token: localStorage.getItem('userToken') }
  paymentOnline(id?:string|null,value?:ShippingAddress):Observable<any>{
    
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress:value

    },{
      headers:this.headersToken
    })


  }


}
