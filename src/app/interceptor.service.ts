import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { AccountService } from './account/account.service';
import { timer, of } from 'rxjs';
import { retryWhen, timeout, catchError, delayWhen, tap } from 'rxjs/operators';
import { ConnectionService } from './connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private injector: Injector, private connectionService: ConnectionService) { }

  intercept(req, next){ 
    let accountService = this.injector.get(AccountService);
    let tokenReq = req.clone({setHeaders:{Authorization: 'Bearer ' + accountService.getToken()}});
    return next.handle(tokenReq).pipe(
      tap(event => {if(event instanceof HttpResponse){this.connectionService.connected = true}}),
      retryWhen((error) => error.pipe(delayWhen(val => timer(2000)))),
      timeout(2000),
      catchError( error => {
        this.connectionService.connected = false;
        return of('')
      })
    );
  }
}
