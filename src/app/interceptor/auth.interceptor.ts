import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');
    console.log(authToken);
    const authequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    });
    return next.handle(authequest);
  }

  constructor(){

  }

}