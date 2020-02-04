import {Http} from "../../lib/Http.js";

export class CustomerService {
    constructor() {
        this.baseUrl = "http://localhost:3000/customers"
    }

    getAllCustomers () {
         return Http.get(this.baseUrl);
    }
}