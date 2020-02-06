// Context
console.log(this); // leer wenn via node

// nur unter node:
//console.log(global);
console.log(window === this);

var color = 'green';

function sayColor(p) {

    // this ist abhängig vom Aufrufkontext
    console.log(p, this.color);
}

sayColor('via global');

// bind fixiert den Ausführungskontext
let bindToSayColor = sayColor.bind({color: 'red'});
bindToSayColor('bind');

let contextA = {
    color: 'yellow',
    sayColor: sayColor
};

contextA.sayColor('via ContextA');

let contextB = {
    sayColor: function (p) {
        // this ist abhängig vom Aufrufkontext
        console.log(p, this.color);
    }
};
contextB.sayColor('direkt');
contextB.sayColor.call(contextA, 'via ContextB');

// ES3
// kopieren den Original-Kontexts
let _this = this;
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
    console.log(_this.color);

    // this zum Zeipunkt der Ausführung,
    // Funktion wird im Kontext ... (bestimmt durch addEventListener)
    // ausgeführt (hier: der Button)
    console.dir(this);
});

// ES5
// Binden des Original-Kontexts
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (event) {
    console.log(this.color);
    console.dir(event.target);
}.bind(this));


// ES 6
// Arrow Function
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (event) => {
    // this zum Zeitpunkt der Erstellung der Funktion
    console.log(this.color);
    console.dir(event.target);
});

const fArrwoFull =  (x) => {
    return x *2;
};
fArrwoFull();

// 1 Parameter: Klammern weg
// 1 Anweisung: Return und Klammern raus
const fArrow = x => x * 2;

const erg = fArrow(5);
console.log(erg);

const list = [3, 6, 5, 2];
const tranformiert = list.map(item => item * 2);
console.log(tranformiert);