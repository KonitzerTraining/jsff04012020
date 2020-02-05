/*
let const
 */

// Konstante
const API = '209438092348';
// API = 234;

// Variablen
let aLet = 1;
console.log(aLet);

{
    let temp = 'test';
    console.log(temp);
}
// console.log(temp);

// Template literal notation
let text1 = 'Das ist ein Text';
let textNeu = `
Mehr-
zeiliger
    Text
    ${baustein()}
`;
console.log(textNeu);

function baustein() {
    return 'ok';
}

