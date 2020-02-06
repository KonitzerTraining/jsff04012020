'use strict';

// ES 3
// Object als Konstruktorfunktion
let o1 = new Object(); // unüblich
console.log(o1);

// Object Literal Notation - besser als new Object()
let o2 = {
    color: 'red',
    title: 'Text',
    //Zeichenkette als Eigenschaft möglich
    'meine persönliche Eigenschaft': 'test',

    // Number als Schlüssel, wie bei Arrays oder anderen Collections
    3: 'auch'
};

// Zusätzliche Eigenschaften
o2.color = 'blue';
o2.amount = 4;

// Lesezugriff über . oder []
console.log(o2.amount);
console.log(o2['amount']);
console.log(o2['meine persönliche Eigenschaft']);
console.log(o2[3]);

// Löschen einer Eigenschaft möglich in (ES5) und höher
delete o2.color;
console.log(o2);


// Iterieren über Objekt-Eigenschaften und
// über die Eigenschaften im Prototyp (nicht gut).
for (let key in o2) {
    console.log(key);
}

// Objekt mit eigener Konstruktor-Funktion erstellen
function Person() {
    this.id = Math.random();
}

// Property für das Objekt erreichbar
Person.prototype.city = 'Berlin';
let p1 = new Person();

// alte Variante, eher nicht verwenden -> Object.keys();
for (let key in p1) {

    // Eigenschaften im Prototyp ausschließen
    if (p1.hasOwnProperty(key)) {
        console.log(key);
    }
}

// ES5
// Object ohne Prototyp, Konstruktor und Eigenschaften.
// Erster Parameter is Prototyp
let oES5 = Object.create(null, {});
console.log(oES5);

oES5 = Object.create({
    // Eigenschaft ist enumerable
    constructor: Person
    // Prototypische Eigenschaften aus Person werden nicht
    // automatisch übernommen.
}, {
    name: { // property descriptor map
        value: 'Hans',
        enumerable: false, // schleifenfähig
        writable: true, // änderbar
        configurable: false // löschbar/änderbar
    },
    city: {
        value: 'Berlin',
        enumerable: true
    }
});
console.log(oES5);

// liefert auch die Eigenschaften aus dem Prototyp
for (let key in oES5) {
    console.log(key);
}

// Object.keys liefer alle Eigenschaften des Objects, wenn
// diese enumerable, keine aus dem Prototype
Object.keys(oES5).forEach((key) => {
    console.log(key, oES5[key]);
});

// kein neuen Eigenschaften hinzufügen oder vorhandene löschen
//Object.seal(oES5);

// keine Änderungen
//Object.freeze(oES5);

let product = {
    title: 'Moped'
};

// Granulare Rechte für neue Eigenschaften
Object.defineProperty(product, 'price', {
    value: 350, enumerable: true,
});
Object.defineProperties(product, {
    __id__: {
        value: '034940',
        writable: true
    },

    // Get und set für id
    // Funktioniert hier anders als in Java
    id: {
        get: function () {
            return this.__id__;
        },
        set: function (id) {
            this.__id__ = id;
        }
    }
});

// Schreibzugriff löst set-Funktion aus
product.id = '093480982';

// Lesezugriff löst get-Funktion aus
console.log(product.id);

// ES 6
let title = '*Überschrift';
let prop1 = 'plz';
let f = 'sayHello';
let prop3 = 'id';
let oES6 = {
    // Kurzschreibweisen
    title, // title: title
    makeReservation() { // makeReservation: function () {
        console.log('ok');
    },

    // Dynamische Eigenschaften
    [prop1]: '09389', // plz: '09389'
    [f]() {
        console.log('hallo');
    },

    // Get und set auch dynmaisch möglich
    get [prop3]() {
        return 'schon wieder?';
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

// Re-Implementierung von Object.defineProperty() aus ES5
Reflect.defineProperty(oES6, 'street', {
    value: 'soso', enumerable: true
});

console.log(oES6);
// Fehlermeldung: street ist readonly
// oES6.street = 2234;