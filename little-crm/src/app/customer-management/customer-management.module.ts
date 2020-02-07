import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule,
    HttpClientModule
  ],
  exports: [
    CustomerListComponent
  ]
})
export class CustomerManagementModule { }
