import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


@NgModule({
    declarations: [CustomerListComponent],
    exports: [
        CustomerListComponent
    ],
    imports: [
        CommonModule,
        CustomerManagementRoutingModule
    ]
})
export class CustomerManagementModule { }
