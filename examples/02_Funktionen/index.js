"use strict"; // ES5

// Funktionen anlegen
funktionsDefinition();

// console.log(a);

function funktionsDefinition () {
   let a = 134;
   console.log(a);
}

// Funktions Ausdruck
// ES6: Default Values
let f1 = function (x = 0, y) {
   console.log(typeof y);
   console.log(x*x);
   return null; // default ist undefined
};

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

// IIFE Arrow
(() => {
   console.log('läuft')

})();
