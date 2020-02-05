let a = 234;
a = '234';

let b1: number;
b1 = 34;
b1 = null;
b1 = undefined;
let b2: any = 'egal';

// Oder
let path: string | string[] = 'asdf';
path = ['asdf'];

// Collection
let list: Array<string> = ['234', 234];

// Tuple
let record: [number, string, string];
record = [23, 'Hans', 'Berlin'];

// Enum
enum Sendung {
    Verschollen,
    Gelagert,
    Unterwegs,
    Geliefert
}

let myPost: Sendung = Sendung.Verschollen;

if (myPost === Sendung.Verschollen) {
    console.log('weg');
}

interface IContact {
    phone?: string;
    email?: string;
}

interface IAddress {
    street: string;
}

// interface
interface ICustomer extends IContact{
    id: number;
    name: string;
    address?: IAddress;
}

let c1: ICustomer = {
    id: 3,
    name: 'Hans',
    address: {
        street: '234'
    },
    phone: '0983948029384'
};

let data: any = {id: 5, name: 'Peter'};

console.log((data as ICustomer).name);


