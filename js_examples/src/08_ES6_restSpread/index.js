// Rest-Operator
function compute(x, y, ...z) {
    console.log(x, y, z);
    //let args = arguments;

    // arguments kennt keine Array-Methoden
    let args = Array.from(arguments);
    // args kennt jetzt Array-Methoden


    args.forEach((item) => {
        console.log(item);
    });

    // Alternative Monkey-patching
    // args.constructor.prototype.forEach = Array.prototype.forEach;
    // Nachteil: Alle HTMLCollections haben jetzt die forEach-Methode.
    console.log(z);

    return x * y;
}

let list = [23, 4, 8, 5];
compute.apply({}, list); //ES5 Polyfill
compute(...list); // Spread-Operator

// Rest-Operator
let [a,b, ...c] = list;
console.log(a, b, c);

// Holen von Elementen via DOM-Methode (anstatt querySelectorAll())
let article = document.getElementsByTagName('article');
console.log(article);

// HTMLCollection kennt kein forEach
// Lösung 0: for-Schleife (lame)
// Lösung 1: Monkey Patching (besser nicht)
// Lösung 2: Array.from() erstell aus einem iterable ein Array (good)
// Lösung 3: Spread-Operator und Array Literal Notation (best)

Array.from(article).forEach((item) => {
    console.log(item);
});

[...article].forEach((item) => {
    console.log(item);
});

