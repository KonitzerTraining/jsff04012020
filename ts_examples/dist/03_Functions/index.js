function compute(x, y) {
    return x * x;
}
compute(34);
function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}
multiply(234, '12');
let fx = (y) => y * y;
console.log(fx(4));
//# sourceMappingURL=index.js.map