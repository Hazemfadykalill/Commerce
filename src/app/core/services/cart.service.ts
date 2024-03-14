import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber:BehaviorSubject<any>=new BehaviorSubject(localStorage.getItem('cartNumber'));
baseURL:string = "https://ecommerce.routemisr.com/api/v1/cart"
  constructor(private _HttpClient: HttpClient) { }
  // headersToken: any = { token: localStorage.getItem('userToken') }
  // add product to cart  
  addProductToCart(id: string):Observable<any> {
   return this._HttpClient.post(this.baseURL, {
      productId: id,
    },
      )

  }

  // get all product from cart
 getAllProductFromCart():Observable<any> {
    return this._HttpClient.get(this.baseURL, 
       )
 
   }
// deleteProduct

deleteProductFromCart(id:string):Observable<any> {
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, 
     )

 }

//  update count 
updateCountCart(count:number,id:string):Observable<any> {
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    count: count
},
     )

 }

 //  clear cart 
clearCart():Observable<any> {
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`, 
     )

 }

  
}
