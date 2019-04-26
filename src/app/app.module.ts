import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { GroupCreateComponent } from './group/group-create/group-create.component';
import { GroupRemoveComponent } from './group/group-remove/group-remove.component';
import { PersonSearchComponent } from './person/person-search/person-search.component';
import { ConnectionComponent } from './connection/connection.component';
import { MembershipListComponent } from './person/membership-list/membership-list.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GroupComponent, GroupInfoComponent, GroupCreateComponent, GroupRemoveComponent,
    PersonComponent, PersonSearchComponent, MembershipListComponent,
    AccountComponent, SignInComponent, SignUpComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [AccountService, GroupService, AuthGuard, 
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
