// Im Funktionskopf Typen angeben
// ? optionaler Parameter
// Default-Werte möglich (gibt es schon ES6)
function compute(x: number, x1 = 234, y?: number): number {
    return x * x;
}

compute(23);

/*
Funktionen mit möglichem Error werden manchmal nicht bis zum Ende ausgeführt
Mit | können mehrere Typen angegeben werden
 */

function multiply(x: number, y: number): number | never {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}

multiply(234, '12');

let fx: (x: number) => number = (y: number):number => y * y;
console.log(fx(4));

let fy: (y?: string) => number = (text: string): number  => text.length;
fy(234);

