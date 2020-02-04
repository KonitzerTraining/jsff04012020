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
        configurable: false // löschbar
    },
    city: {
        value: 'Berlin',
        enumerable: true
    }
});
console.log(oES5);

for(let key in oES5) {
    console.log(key);
}

Object.keys(oES5).forEach( (key) => {
    console.log(key, oES5[key]);
});

//Object.seal(oES5);
//Object.freeze(oES5);

let z = {
    title: 'aha'
};

Object.defineProperty(z, 'id', {
    value: '02938490', enumerable: true
});
console.log(z);