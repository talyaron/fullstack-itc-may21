// create a class of Car
// in the costructor, set brand, model, price, amountOfCars,
// and there will be two methods.
// 1) return the price of the total cars
// 2) console.log the brand and the model of the car;

// create 3 instance and run the methods, for each of them.

class Car {

    constructor(make, model, price, qntyOH) {

        this.make = make;
        this.model = model;
        this.price = price;
        this.qntyOH = qntyOH;


        this.total();
    }

    total() {
        try {
            Car.total;  this.price * this.qntyOH;

        } catch (error) {
            console.error(error)
        }
    }
}





let ford = new Car(`ford`, `mustang`, `$60,000`, `13`);
let chevy = new Car(`chevy`, `corvette`, `$85,000`, `6`);
let dodge = new Car(`dodge`, `viper`, `$105,000`, `17`);

console.log(total(ford));
