import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {

  constructor(private _http:HttpClient) { }

  updatePassword(value:object):Observable<any>{
    return this._http.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",value)

  }


}
