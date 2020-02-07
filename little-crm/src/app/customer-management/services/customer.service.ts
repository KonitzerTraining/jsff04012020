import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAllCustomers() {
    return this.http.get('http://localhost:3000/customers');
  }

  deleteOneCustomer(id: any) {
    return this.http.delete('http://localhost:3000/customers/' + id);
  }
}
