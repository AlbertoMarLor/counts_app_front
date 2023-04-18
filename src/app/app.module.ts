import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { FormGroupComponent } from './components/groups/form-group/form-group.component';
import { GroupsComponent } from './components/groups/groups/groups.component';
import { BillsComponent } from './components/bills/bills/bills.component';
import { FormBillComponent } from './components/bills/form-bill/form-bill.component';
import { UpdateGroupComponent } from './components/groups/update-group/update-group.component';
import { UpdateBillComponent } from './components/bills/update-bill/update-bill.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FormGroupComponent,
    GroupsComponent,
    BillsComponent,
    FormBillComponent,
    UpdateGroupComponent,
    UpdateBillComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
