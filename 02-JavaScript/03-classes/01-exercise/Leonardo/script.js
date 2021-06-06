/* create a class of Car
in the costructor, set brand, model, price, amountOfCars,
and there will be two methods.
1) return the price of the total cars
2) console.log the brand and the model of the car;

create 3 instance and run the methods, for each of them.
 */

class Car {

    constructor(brand, model, price, amountOfCars) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.amountOfCars = amountOfCars;
        
    }

    totalPrice() {
        let total = this.price * this.amountOfCars
        return total
    };

    brandAndModel() {
        console.log(`The brand of the car is ${this.brand} and the model is ${this.model}`)
    }
}

//Instances of the cars
const car01 = new Car('Peugeot', '307', 500, 4);
const car02 = new Car('Fiat', 'Palio', 750, 10);
const car03 = new Car('Ford', 'Mondeo', 650, 3);

car01.brandAndModel();
car02.brandAndModel();
car03.brandAndModel();

console.log(car01.totalPrice());
console.log(car02.totalPrice());
console.log(car03.totalPrice());