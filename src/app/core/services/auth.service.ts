import {  RegisterUser } from '../interfaces/register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 pase_URL:string=`https://ecommerce.routemisr.com/api/v1/auth/`;
 main_URL:string=`https://ecommerce.routemisr.com`;
 userInformation:any;

  constructor( private _httpClient:HttpClient) { }
  // register
  registerUser(registerValue:RegisterUser):Observable<any>{
    

    return this._httpClient.post(this.pase_URL+"signup",registerValue);

  }
// login
  loginUser(loginValue:Login):Observable<any>{
    

    return this._httpClient.post(this.pase_URL+"signin",loginValue);

  }
  // decode token
  decodeToken(){
    let encodeToken=localStorage.getItem("userToken");
    if(encodeToken!=null){
      let decodeToken=jwtDecode(encodeToken);
      this.userInformation=decodeToken;
      
    }
  }



}
