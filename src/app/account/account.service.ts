import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from './sign-up/sign-up.model';
import { SignIn } from './sign-in/sign-in.model';
import { serverurl } from '../serverurl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router: Router) { }

  signUp(model: SignUp){
    const url = serverurl + "Account/SignUp";
    return this.http.post<any>(url, model);
  }

  signIn(model: SignIn){
    const url = serverurl + "Account/SignIn";
    return this.http.post<any>(url, model);
  }

  loggedIn(){
    return !!this.getToken();
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }
}
