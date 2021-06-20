class Device {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    buyCar() {
        if (this.price > 50000) {
            return `You can Buy ${this.name}`
        }
    }
}

class Mobile extends Device {
    constructor(name, price) {
        super(name, price)
    }
}
const OwnMobile = new Mobile('Samsung S20 Plus', 500000);
console.log(OwnMobile.buyCar());
