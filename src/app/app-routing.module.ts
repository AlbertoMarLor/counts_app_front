import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'groups/newGroup', component: FormGroupComponent },
  { path: 'bills/newBill', component: FormBillComponent },
  { path: 'groups/:groupId', component: UpdateGroupComponent },
  { path: 'groups/:billId', component: UpdateBillComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
