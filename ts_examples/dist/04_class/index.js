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
    }
    passtDas(s) {
        return s === this.size;
    }
    get info() {
        return Bekleidung.info;
    }
}
//private size: string;
Bekleidung.info = '2.0';
let b = new Bekleidung('L', 'Hemd', 43);
console.log(b.size);
console.log(b.passtDas('M'));
//# sourceMappingURL=index.js.map