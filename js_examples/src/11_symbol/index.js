// ES6 simple type
// symbol

let s1 = Symbol(); // Eindeutiger Wert
let s2 = Symbol();
console.log(s1 === s2);
console.log(s1, typeof s1);

const ox = {
    [s1] () {
        console.log('ok');
    }
};

ox[s1]();

// Symbol key
const add = Symbol.for('add');

const oy = {
    [Symbol.for('add')]() {
        console.log('aha');
    }
};

oy[add]();

// Well-known Symbols
// Symbol.replace

console.log('abcb'.replace('b', 'x'));
