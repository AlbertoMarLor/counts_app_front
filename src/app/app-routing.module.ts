import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { GroupsComponent } from './components/groups/groups/groups.component';
import { BillsComponent } from './components/bills/bills/bills.component';
import { FormGroupComponent } from './components/groups/form-group/form-group.component';
import { FormBillComponent } from './components/bills/form-bill/form-bill.component';
import { UpdateGroupComponent } from './components/groups/update-group/update-group.component';
import { UpdateBillComponent } from './components/bills/update-bill/update-bill.component';

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
