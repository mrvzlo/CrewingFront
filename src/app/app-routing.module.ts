import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { GroupInfoComponent } from './group/group-info/group-info.component';
import { AuthGuard } from './auth.guard';
import { PersonComponent } from './person/person.component';
import { PersonSearchComponent } from './person/person-search/person-search.component';

const routes: Routes = [
  { path: 'account/signin', component: SignInComponent },
  { path: 'account/signup', component: SignUpComponent },
  { path: 'group/:name', component: GroupInfoComponent, canActivate: [AuthGuard] },
  { path: 'group', component: GroupComponent, canActivate: [AuthGuard] },
  { path: 'person/info/:guid', component: PersonComponent, canActivate: [AuthGuard] },
  { path: 'person/search', component: PersonSearchComponent, canActivate: [AuthGuard] },
  { path: 'account', redirectTo: '/account/signin', pathMatch: 'full' },
  { path: 'person', redirectTo: '/person/search', pathMatch: 'full' },
  { path: '', redirectTo: '/group', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
