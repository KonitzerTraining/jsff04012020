// Rest-Operator
function compute(x, y, ...z) {
    //let args = arguments;
    let args = Array.from(arguments);
    // Monkey-patching
   // args.constructor.prototype.forEach = Array.prototype.forEach;
    args.forEach((item) => {
        console.log(item);
    });

    console.log(z);
    return x * y;
}

let list = [23, 4, 8, 5];
compute(...list); // Spread-Operator

// Rest
let [a,b, ...c] = list;
console.log(a, b, c);