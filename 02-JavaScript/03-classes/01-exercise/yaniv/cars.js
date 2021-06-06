class Car {
    constructor(brand, model, price, amountOfCars) {
        try {
            if (typeof brand !== 'string') throw new Error('Brand should be a string!');
            if (typeof model !== 'string') throw new Error('Model should be a string!');
            if (!Number.isInteger(price)) throw new Error('Price should be an integer!');
            if (!Number.isInteger(amountOfCars)) throw new Error('Amount of cars should be an integer!');
            if (price<0) throw new Error('Price should be larger than 0!');
            if (amountOfCars<0) throw new Error('Amount of cars should be larger than 0!');
            this.brand = brand;
            this.model = model;
            this.price = price;
            this.amountOfCars = amountOfCars;
            this.totalPrice();
            this.brandNModel();
        } catch (e) {
            console.error(e);
        }
    }

    totalPrice() {
        const result = this.price * this.amountOfCars;
        return `The total price of ${this.amountOfCars} ${this.brand} ${this.model}'s is: ${result}`;
    }

    brandNModel() {
        console.log(`Brand: ${this.brand}; Model: ${this.model}`);
    }
}

const car1 = new Car('Toyota', 'Yaris', 80000, 4);

console.log(car1);
console.log(car1.totalPrice());

const car2 = new Car('Kia', 'Ceed', 60000, 10);

console.log(car2);
console.log(car2.totalPrice());

const car3 = new Car('Audi', 'TT', 190000, 2);

console.log(car3);
console.log(car3.totalPrice());

const car4 = new Car(['Audi'], 'TT', 190000, 2);
const car5 = new Car('Audi', 300, 190000, 2);
const car6 = new Car('Audi', 'TT', {price:190000}, 2);
const car7 = new Car('Audi', 'TT', 190000, '2');
const car8 = new Car('Audi', 'TT', 190000, -22);