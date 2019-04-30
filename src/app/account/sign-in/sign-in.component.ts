import { Component, OnInit } from '@angular/core';
import { SignIn } from './sign-in.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  model: SignIn = new SignIn;
  errors: { Email: string, Password: string, Sum: string} = {
    Email: "",
    Password: "",
    Sum: "",
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.accountService.signIn(this.model).subscribe(      
      res => {
      if (res.success){
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        this.router.navigate(["group"]);
      }else{
        this.errors.Email = res.result.Email;
        this.errors.Password = res.result.Password;
        this.errors.Sum = res.result.Sum;
      }
    });
  }
}
