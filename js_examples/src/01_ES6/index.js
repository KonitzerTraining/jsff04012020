/*
Neues Schlüsselwörter let und const
    */

// Konstante
const API = '209438092348';
console.log(API);
// API = 234;

// Variablen
let aLet = 1;
console.log(aLet);

var x = 1; // x ist global und eine Eigenschaft des Contexts
console.log(x);
console.log(this.x);
console.log(this);

{ // Anonymer Block
    let temp = 'test';
    console.log(temp);
}
// console.log(temp); => Fehler


// Template literal notation
let text1 = 'Das ist ein Text';
let textNeu = `
Mehr-
zeiliger
    Text
    ${baustein() + 3}
    ${text1}
`;
console.log(textNeu);

function baustein() {
    return 45;
}

