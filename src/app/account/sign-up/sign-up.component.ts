import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignUp } from './sign-up.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: SignUp = new SignUp;
  errors: {
    Email: string,
    Password: string,
    Confirm: string,
    Sum: string,
  } = {
    Email: "",
    Password: "",
    Confirm: "",
    Sum: "",
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.accountService.signUp(this.model).subscribe(
      res => {
        if (res.success){
          localStorage.setItem('token', res.token);
          this.router.navigate(["group"]);
        }else{
          this.errors.Email = res.result.Email;
          this.errors.Password = res.result.Password;
          this.errors.Confirm = res.result.Confirm;
          this.errors.Sum = res.result.Sum;
        }
      }
    ); 
  }
}
