let items = [3,4,5,3,4,3,2,3];
// Set nimmt Collection entgegen

// Kein Element kommt doppelt vor
let list = new Set(items); // ab ES6

console.dir(Set);
console.log(list);

// Wandelt ein Set wieder in ein Array
const filteredArrayA = Array.from(list);
console.log(filteredArrayA);

// Wandelt ein Set in ein Array mittels Spread-Operator
const filteredArrayB = [...list];
console.log(filteredArrayB);

let text =  'aabaabcba';
// Set enthält einzelne Buchstaben
let textSet = new Set(text);
let textFiltered = [...textSet].join('');
console.log(textFiltered);

let o1 = {a: 1};
let o2 = {b: 2};
let list1 = [o1, o2, o2, o1, o2];
let oSet = new Set(list1);
console.log(oSet);

let list2 = [2,3,4];
console.log(list2);

// Alle Objekte mit iterator können mit for..of verarbeit werden.
// Array, Map, Set

// ES6 for-of
for(let v of list2) {
    console.log(v);
}
for(let [key, value] of list2.entries()) {
    console.log(key, value);
}
for(let value of list2.values()) {
    console.log(value);
}

for(let key of list2.keys()) {
    console.log(key);
}
for(let key in list2) {
    console.log(key, list2[key]);
}

for(let entry of list.entries()) {
    console.log(entry);
}
