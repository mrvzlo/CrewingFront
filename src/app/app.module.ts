import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavbarComponent,
    GroupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
