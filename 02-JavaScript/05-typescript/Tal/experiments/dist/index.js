var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        return "my name is " + this.name;
    };
    return Person;
}());
var Cars = /** @class */ (function () {
    function Cars(car) {
        this.car = car;
        this.owners = [];
        this.root = document.querySelector('#root');
    }
    Cars.prototype.tellCar = function () {
        var message = "the car is a " + this.car.brand + " model " + this.car.model;
        this.root.innerText = message;
        return message;
    };
    Cars.prototype.addOwner = function (owner) {
        this.owners.push(owner.name);
        return this.owners;
    };
    return Cars;
}());
var moses = new Person('moses');
console.log(moses.sayName());
var myCar = new Cars({ model: 'focos', brand: 'ford' });
var model = myCar.tellCar();
console.log(model);
var owners = myCar.addOwner(moses);
console.log(owners);
console.dir(document.querySelector('#root'));
