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
import { AddUserComponent } from './components/groups/add-user/add-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/bills/:groupId', component: BillsComponent },
  { path: 'groups/newGroup', component: FormGroupComponent },
  { path: ':groupId/search', component: AddUserComponent },
  { path: 'groups/bills/:groupId/newBill', component: FormBillComponent },
  { path: 'groups/edit/:groupId', component: UpdateGroupComponent },
  { path: 'groups/bills/edit/:groupId/:billId', component: UpdateBillComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
