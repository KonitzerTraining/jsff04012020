class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class Bekleidung extends Product {
    constructor(size, title, price) {
        super(title, price);
        this.size = size;
        //this.size = size;
        console.log(size);
        console.log(this.size);
    }
    passtDas(s) {
        return s === this.size;
    }
    get info() {
        return Bekleidung.info;
    }
}
//private size: string;
// private public
Bekleidung.info = 'Only for testing';
let b = new Bekleidung('L', 'Hemd', 43);
console.log(Bekleidung.info);
console.log(b.size);
console.log(b.passtDas('M'));
//# sourceMappingURL=index.js.map