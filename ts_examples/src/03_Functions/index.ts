function compute(x: number, y?: number): number {
    return x * x;
}

compute(34);

function multiply(x: number, y: number): number | never {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}

multiply(234, '12');

let fx: (x: number) => number = (y: number):number => y * y;
console.log(fx(4));
