'use strict'; // ES5, ab IE 10

// Funktionen anlegen
funktionsDefinition();

// console.log(a);

// Funktion erfährt Hoisting
function funktionsDefinition () {
    // Keine impliziten Globalen mit 'use strict';
    // -> Namespace-Pattern überdenken
    //globaleX = 'asdf';
    let a = 134;
    console.log(a);
}

// Funktions Ausdruck
// f1(); -> jetzt nicht mehr möglich
// Ausdruck wird wegen = nicht gehoisted
// ES6: Default Values
let f1 = function (x = 0, y) {
    console.log(typeof y);
    console.log(x*x);
    return null; // default ist undefined
};

// ES kennt keine named parameter
let erg = f1();

console.log(erg, typeof erg);

// IIFE - Immediately invoked function expression
(function () {
    console.log('ok');
}());

// ES6 Arrow-Function
let fx = (p) => {
    console.log(p);
};

fx('test');

// IIFE mit Arrow Function
(() => {
    console.log('läuft');
})(); // Order-Operator-Klammer liegt innen.
