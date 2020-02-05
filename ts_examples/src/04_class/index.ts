class Product {
    constructor(public title: string, public price: number) {


    }

}

class Bekleidung extends Product {
    //private size: string;
    public static info: string = '2.0';

    constructor(private size: string, title: string, price: number) {
        super(title, price);
        //this.size = size;
    }

    public passtDas(s): boolean {
        return s === this.size;
    }

    get info() {
        return Bekleidung.info;
    }
}

let b = new Bekleidung('L', 'Hemd', 43);
console.log(b.size);
console.log(b.passtDas('M'));