"use strict";

// ES 3
let o1 = new Object();

// Object Literal Notation
let o2 = {
    color: 'red',
    title: 'Text',
    "meine persönliche Eigenschaft": 'test',
    3: 'auch'
};
o2.color = 'blue';
o2.amount = 4;

console.log(o2.amount);
console.log(o2['amount']);
console.log(o2["meine persönliche Eigenschaft"]);
console.log(o2[3]);

// Anonymer Block
{
    let a = 1;
}

delete o2.color;
console.log(o2);

for (let key in o2) {
    console.log(key);
}

function Person() {
    this.id = Math.random();
}

Person.prototype.city = 'Berlin';
let p1 = new Person();

for (let key in p1) {
    if (p1.hasOwnProperty(key)) {
        console.log(key);
    }
}

// ES5
let oES5 = Object.create(null, {});
console.log(oES5);

oES5 = Object.create({
    constructor: Person
}, {
    name: { // property descriptor map
        value: 'Hans',
        enumerable: true, // schleifenfähig
        writable: true, // änderbar
        configurable: false // löschbar/änderbar
    },
    city: {
        value: 'Berlin',
        enumerable: true
    }
});
console.log(oES5);

for (let key in oES5) {
    console.log(key);
}

Object.keys(oES5).forEach((key) => {
    console.log(key, oES5[key]);
});

//Object.seal(oES5);
//Object.freeze(oES5);

let product = {
    title: 'Moped'
};

Object.defineProperty(product, 'price', {
    value: 350, enumerable: true,
});
Object.defineProperties(product, {
    __id__: {
        value: '034940',
        writable: true
    },
    id: {
        get: function () {
            return this.__id__;
        },
        set: function (id) {
            this.__id__ = id;
        }
    }
});
product.id = '093480982';
console.log(product.id);

// ES 6
let title = '*Überschrift';
let prop1 = 'plz';
let f = 'sayHello';
let oES6 = {
    title,
    makeReservation () {
        console.log('ok');
    },
    [prop1]: '09389',
    [f] () {
        console.log('hallo');
    },
    get id() {
        return 'schon wieder?'
    },
    set id(n) {
        console.log(n);
    }
};

console.log(oES6.plz);
console.log(oES6[prop1]);
oES6[f]();
console.log(oES6.id);
oES6.id = '234';

Reflect.defineProperty(oES6, 'street',{
    value: 'soso', enumerable: true
} );

console.log(oES6);