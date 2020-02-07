import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  private $customers: Observable<Object>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadCustomers();
  }

  delete(id: any) {
    this.customerService.deleteOneCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }

  loadCustomers() {
    this.$customers = this.customerService.getAllCustomers()
  }
}
