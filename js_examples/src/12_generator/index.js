// normale Funktion
// Ein Aufruf => Ein Ergebnis

function f1 () {
    return 1;
}

let erg = f1();
console.log(erg);

// Generator
function* f2 () {
    let i = 0;
    while (i < 4) {
        i += 1;
        yield i;
    }
}

const gen = f2();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Iterator selbst erstllen
class Collection {
    * [Symbol.iterator] () {
        yield 1;
        yield 2;
    }
}

let c = new Collection();
for (let entries of c) {
    console.log(entries);
}

let list = [...c];
console.log(list);

let list2 = Array.from(c);
console.log(list2);
