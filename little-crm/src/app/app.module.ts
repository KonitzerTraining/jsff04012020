import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerManagementModule} from "./customer-management/customer-management.module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CustomerManagementModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
