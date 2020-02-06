// normale Funktion
// Ein Aufruf => Ein Ergebnis

function f1() {
    return 1;
}

let erg = f1();
console.log(erg);

// Generator
// liefert via next() viele Ergebnisse
function* f2() {
    let i = 0;
    while (true) {
        i += 1;
        yield i; // yield = senden
    }
}

// Generator-Objekt
const gen = f2();
const gen1 = f2();
console.log(gen.next());
console.log(gen.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen.next());

// Iterator selbst erstllen
class Collection {
    constructor() {
        this.entries = document.querySelectorAll('p');
    }

    // Generator Methode
    * [Symbol.iterator]() {
        for (let i = 0; i < this.entries.length; i += 1) {
            yield this.entries[i];
        }
    }
}

let c = new Collection();
console.log(c);
for (let entries of c) {
    console.log(entries);
}

let list = [...c];
console.log(list);

let list2 = Array.from(c);
console.log(list2);
