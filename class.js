class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    buyCar() {
        if (this.price < 50000) {
            return `You can Buy ${this.name} car`
        }
    }
}
const OwnCar = new Car('BMW', 500000);
console.log(OwnCar);
