import {CustomerService} from "../services/CustomerService.js";
import {HTMLRenderer} from "../../lib/HTMLRenderer.js";

class CustomerListComponent extends HTMLElement {
    constructor() {
        super();

        this.customerService = new CustomerService();
        this.htmlRenderer = new HTMLRenderer();

        this.create();
        this.render();
    }

    create() {
        this.el = document.createElement('div');

        this.el.innerHTML = `
        <h2>Customers</h2>
        <table class="table table-striped">
        <thead><tr><th>Id</th><th>Name</th><th></th></tr></thead>
        <tbody id="content">
            <tr>
                <td>{{id}}</td>
                <td>{{name}}</td>
                <td><button class="btn btn-warning">Delete</button></td>
            </tr>
        </tbody>
        </table>
        `;
    }

    render() {
        this.customerService
            .getAllCustomers()
            .then((customers) => {
                let contentElement = this.el.querySelector('#content');
                contentElement.innerHTML = this.htmlRenderer.renderMany(customers, contentElement.innerHTML);
            })
            .then(() => {
                this.appendChild(this.el);
            });
    }

}

customElements.define('customer-list', CustomerListComponent);