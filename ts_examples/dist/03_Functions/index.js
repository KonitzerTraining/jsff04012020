// Im Funktionskopf Typen angeben
// ? optionaler Parameter
// Default-Werte möglich (gibt es schon ES6)
function compute(x, x1 = 234, y) {
    return x * x;
}
compute(23);
/*
Funktionen mit möglichem Error werden manchmal nicht bis zum Ende ausgeführt
Mit | können mehrere Typen angegeben werden
 */
function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}
multiply(234, '12');
let fx = (y) => y * y;
console.log(fx(4));
let fy = (text) => text.length;
fy(234);
//# sourceMappingURL=index.js.map