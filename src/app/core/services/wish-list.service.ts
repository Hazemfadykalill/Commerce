import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
countNumber:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _http:HttpClient) { }
  baseURL:string=`https://ecommerce.routemisr.com/api/v1/`

  // add product to wish list
  addToWish(id:any):Observable<any>{
   return this._http.post(this.baseURL+`wishlist`,{
      productId: id
  }); 
  }
  // get all products from wish list
  getAllWishList():Observable<any>{
    return this._http.get(this.baseURL+`wishlist`);
  }

  // remove product from wish list

  remove(id:any):Observable<any>{
    return this._http.delete(this.baseURL+`wishlist/${id}`);
  }
 


}
