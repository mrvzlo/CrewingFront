import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { GroupInfoComponent } from './group/group-info/group-info.component';
import { AuthGuard } from './auth.guard';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'account', redirectTo: '/account/signin', pathMatch: 'full' },
  { path: 'account/signin', component: SignInComponent },
  { path: 'account/signup', component: SignUpComponent },
  { path: 'group', component: GroupComponent, canActivate: [AuthGuard] },
  { path: 'group/:name', component: GroupInfoComponent, canActivate: [AuthGuard] },
  { path: 'person/:guid', component: PersonComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
