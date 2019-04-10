import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { GroupInfoComponent } from './group/group-info/group-info.component';
import { AccountService } from './account/account.service';
import { GroupService } from './group/group.service';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavbarComponent,
    GroupComponent,
    HomeComponent,
    PersonComponent,
    SignInComponent,
    SignUpComponent,
    GroupInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountService, GroupService, AuthGuard, 
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
