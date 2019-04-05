import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'group', component: GroupComponent },
  { path: 'home', component: GroupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
