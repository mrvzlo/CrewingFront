import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AccountService } from './account/account.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){ 
    let accountService = this.injector.get(AccountService);
    let tokenReq = req.clone({setHeaders:{Authorization: 'Bearer ' + accountService.getToken()}});
    return next.handle(tokenReq);
  }
}
