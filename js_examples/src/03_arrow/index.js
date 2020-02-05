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

let bindToSayColor = sayColor.bind({color: 'red'});
bindToSayColor('bind');

sayColor('via global');

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

contextB.sayColor.call(contextA, 'via ContextB');

// ES3
let _this = this;
btn1.addEventListener('click', function () {
    console.log(_this.color);

    // this zum Zeipunkt der Ausführung,
    // Funktion wird im Kontext ... (bestimmt durch addEventListener)
    // ausgeführt (hier: der Button)
    console.dir(this);
});

// ES5
btn2.addEventListener('click', function (event) {
    console.log(this.color);
    console.dir(event.target);
}.bind(this));

// ES 6
btn3.addEventListener('click', (event) => {
    // this zum Zeitpunkt der Erstellung der Funktion
    console.log(this.color);
    console.dir(event.target);
});

let fArrow = x => x * 2;

let erg = fArrow(5);
console.log(erg);

let list = [3, 6, 5, 2];
let tranformiert = list.map(item => item * 2);
console.log(tranformiert);