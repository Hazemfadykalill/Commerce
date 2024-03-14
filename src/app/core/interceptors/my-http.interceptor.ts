import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(localStorage.getItem("userToken")!==null){
     const headersToken: any = { token: localStorage.getItem('userToken') }
    request= request.clone({
      setHeaders: headersToken
     })

    }
    return next.handle(request);
  }
}
