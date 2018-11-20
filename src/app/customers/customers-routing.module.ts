import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import { CustomerList2Component } from './customer-list2/customer-list2.component';

const routes: Routes = [
  {path:'',component: CustomerListComponent },
  {path:'list2',component:CustomerList2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
