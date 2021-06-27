var Car = /** @class */ (function () {
    function Car(name, milesPerGallon, cylinders, horsepower, weightLb, year, origin, carId) {
        this.name = name;
        this.milesPerGallon = milesPerGallon;
        this.cylinders = cylinders;
        this.horsepower = horsepower;
        this.weightLb = weightLb;
        this.year = year;
        this.origin = origin;
        this.carId = carId;
    }
    return Car;
}());
var Cars = /** @class */ (function () {
    function Cars() {
        this.cars = [];
    }
    Cars.prototype.add = function (car) {
        this.cars.push(car);
        localStorage.setItem("cars", JSON.stringify(cars));
    };
    ;
    Cars.prototype.removeCar = function (carId) {
        this.cars = this.cars.filter(function (c) { return c.carId !== carId; });
        this.renderCars();
    };
    Cars.prototype.getCarsFromStorage = function () {
        JSON.parse(localStorage.getItem("cars"));
    };
    ;
    Cars.prototype.renderCars = function () {
        var table = document.querySelector(".table");
        var html = "";
        this.cars.forEach(function (car) {
            html += " <tbody>\n       <tr>\n        <td>" + car.name + "</td>\n        <td>" + car.milesPerGallon + "</td> \n        <td>" + car.cylinders + "</td> \n        <td>" + car.horsepower + "</td> \n        <td>" + car.weightLb + "</td> \n        <td>" + car.year + "</td> \n        <td>" + car.origin + "</td>\n        <td> <i onclick=\"handleDelete(\"" + car.carId + "\")\" class=\"fas fa-trash\"></i></td>\n      </tr>";
            console.log(html);
            table.innerHTML = html;
        });
    };
    ;
    return Cars;
}());
var cars = new Cars();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var milesPerGallon = ev.target.elements.milesPerGallon.value;
    var cylinders = ev.target.elements.cylinders.value;
    var horsepower = ev.target.elements.horsepower.value;
    var weightLb = ev.target.elements.weightLb.value;
    var year = ev.target.elements.year.value;
    var origin = ev.target.elements.origin.value;
    var carId = Math.random().toString(16).slice(2);
    var car = new Car(name, milesPerGallon, cylinders, horsepower, weightLb, year, origin, carId);
    cars.add(car);
    cars.renderCars();
    console.log(cars);
    ev.target.reset();
};
var handleDelete = function (carId) {
    console.log(carId);
    cars.removeCar(carId);
};
