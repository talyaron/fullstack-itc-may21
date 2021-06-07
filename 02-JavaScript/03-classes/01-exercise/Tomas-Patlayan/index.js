class Cars {

    constructor(brand,model,price,amountOfCars){
        this.brand = brand;
        this.model = model;
        this.price =price;
        this.amountOfCars =amountOfCars;
        // this.totalPrice();
        // this.BrandandModel()

    }

totalPrice() {
   return(this.price * this.amountOfCars);
}

BrandandModel() {
   return(`the brand is ${this.brand}, the model is ${this.model}`);
}





}


const carOne = new Cars('Ford','Focus',20000 ,3);
const carTwo = new Cars('Nissan', 'March',15000,5);
const carThree = new Cars('Audi','TT',50000,2);


console.log(carOne.totalPrice());
console.log(carTwo.totalPrice());
console.log( carThree.totalPrice());
console.log(carOne.BrandandModel());
console.log(carTwo.BrandandModel());
console.log( carThree.BrandandModel());

// console.log(carOne,carTwo,carThree);

// console.log(totalPrice());
// console.log(BrandandModel());