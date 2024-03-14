import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlePasswordService {

  constructor(private _http:HttpClient) { }
  forgetURL:string="https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords";
  resetCodeURL:string=`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`;
  resetPasswordURL:string=`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`;


  // forget password api

  forget(value:object):Observable<any>{
    return this._http.post(this.forgetURL,value);
  }
  // reset code api 

  reset(value:object):Observable<any>{
    return this._http.post(this.resetCodeURL,value);
  }
  // new password api

  resetPassword(value:object):Observable<any>{
    return this._http.put(this.resetPasswordURL,value);
  }


}
