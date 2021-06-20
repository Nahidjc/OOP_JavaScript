class Device {
    #deviceName = "Smart Phone";

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    buyCar() {
        if (this.price > 50000) {
            return `You can Buy ${this.name} and This is ${this.#deviceName}`
        }
    }

}
console.log(Device.#deviceName);

class Mobile extends Device {
    constructor(name, price) {
        super(name, price)
    }
}
const OwnMobile = new Mobile('Samsung S20 Plus', 500000);
console.log(OwnMobile.buyCar());
