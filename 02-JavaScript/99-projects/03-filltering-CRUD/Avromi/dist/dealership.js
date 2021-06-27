var Car = /** @class */ (function () {
    function Car(Name, Miles_per_Gallon, Cylinders, Horsepower, Weight_in_lbs, Year, Origin) {
        this.Name = Name;
        this.Miles_per_Gallon = Miles_per_Gallon;
        this.Cylinders = Cylinders;
        this.Horsepower = Horsepower;
        this.Weight_in_lbs = Weight_in_lbs;
        this.Year = Year;
        this.Origin = Origin;
        this.carId = Math.random().toString(16).slice(2);
        ;
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
    Cars.prototype.addCars = function (carsArray) {
        var _this = this;
        carsArray.forEach(function (car) {
            var newCar = new Car(car.Name, car.Miles_per_Gallon, car.Cylinders, car.Horsepower, car.Weight_in_lbs, car.Year, car.Origin);
            _this.cars.push(newCar);
        });
        console.log(this.cars);
    };
    Cars.prototype.removeCar = function (carId) {
        var carIndex = this.cars.findIndex(function (c) { return c.carId === carId; });
        this.cars.splice(carIndex, 1);
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
            html += "<tbody>\n       <tr>\n        <td>" + car.Name + "</td>\n        <td>" + car.Miles_per_Gallon + "</td> \n        <td>" + car.Cylinders + "</td> \n        <td>" + car.Horsepower + "</td> \n        <td>" + car.Weight_in_lbs + "</td> \n        <td>" + car.Year + "</td> \n        <td>" + car.Origin + "</td>\n        <td> <i onclick='handleDelete(\"" + car.carId + "\")' class=\"fas fa-trash\"></i></td>\n      </tr>";
            table.innerHTML = html;
        });
    };
    ;
    return Cars;
}());
var cars = new Cars();
cars.addCars(carsData);
cars.renderCars();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var Name = ev.target.elements.Name.value;
    var Miles_per_Gallon = ev.target.elements.Miles_per_Gallon.value;
    var Cylinders = ev.target.elements.Cylinders.value;
    var Horsepower = ev.target.elements.Horsepower.value;
    var Weight_in_lbs = ev.target.elements.Weight_in_lbs.value;
    var Year = ev.target.elements.Year.value;
    var Origin = ev.target.elements.Origin.value;
    var car = new Car(Name, Miles_per_Gallon, Cylinders, Horsepower, Weight_in_lbs, Year, Origin);
    cars.add(car);
    cars.renderCars();
    console.log(cars);
    ev.target.reset();
};
var handleDelete = function (carId) {
    console.log(carId);
    cars.removeCar(carId);
};
