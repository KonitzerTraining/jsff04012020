interface ICustomer {
    id: number;
    name: string;
}

// Decorator (eine Funktion)
@Component({
    template: "<h1>{{title}}</h1>"
})
class CustomerComponent {
    private customers: ICustomer[];

    private title: string;


    constructor() {
        this.title = 'Überschrift';
        this.customers = [
            {
                "id": 5,
                "name": "Hans",

            },
            {
                "id": 1,
                "name": "Hans",
            },
            {
                "id": 2,
                "name": "Peter",
            },
        ]
    }
}

console.log((new CustomerComponent()).render());

function Component (config) {
    return function (classRef) {
        classRef.prototype.render = function () {
            return config.template.replace('{{title}}', this.title);
        }
    }
}

