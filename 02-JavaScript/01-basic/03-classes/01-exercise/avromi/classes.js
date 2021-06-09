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
    }

   totalCost() {
      const cost =  this.price * this.qntyOH;
      return `-->The total of ${this.qntyOH} ${this.make} ${this.model}'s = ${cost}`
    }

    makeModel() {
        console.log(`${this.make} ${this.model}`)
    }
}





let ford = new Car(`ford`, `mustang`, 60000, 13);
let chevy = new Car(`chevy`, `corvette`, 85000, 6);
let dodge = new Car(`dodge`, `viper`, 105000, 17);

ford.makeModel();
console.log(ford.totalCost());
chevy.makeModel();
console.log(chevy.totalCost());
dodge.makeModel();
console.log(dodge.totalCost());
