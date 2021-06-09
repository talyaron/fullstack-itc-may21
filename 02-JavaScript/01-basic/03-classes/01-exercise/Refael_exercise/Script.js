// create a class of Car
// in the costructor, set brand, model, price, amountOfCars,
// and there will be two methods.
// 1) return the price of the total cars
// 2) console.log the brand and the model of the car;

// create 3 instance and run the methods, for each of them.

class cars {
  constructor(brand, model, price, carsAmount, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.carsAmount = carsAmount;
    this.color = color;
  }
  totallPrice() {
    const price = this.carsAmount * this.price;
    console.log(price);
  }
  brandAndmodel() {
    console.log(`${this.brand + this.model + this.color}`);
  }
}

const first = new cars("mazda", "3", "10", "2", "green");
const second = new cars("bmw", "mini", "40", "3", "yellow");
const third = new cars("suzoki", "swift", "50", "1", "black");
first.totallPrice();
second.totallPrice();
third.totallPrice();
first.brandAndmodel();
second.brandAndmodel();
third.brandAndmodel();
