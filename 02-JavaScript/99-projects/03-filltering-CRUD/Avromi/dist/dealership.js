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
    }
    return Car;
}());
var Cars = /** @class */ (function () {
    function Cars() {
        this.cars = [];
    }
    Cars.prototype.add = function (car) {
        this.cars.push(car);
        addNewOrigin();
        addNewCylinders();
        addNewMpg();
        console.log(cars);
        localStorage.setItem("cars", JSON.stringify(cars));
    };
    ;
    Cars.prototype.addCars = function (carsArray) {
        var _this = this;
        carsArray.forEach(function (car) {
            var newCar = new Car(car.Name, car.Miles_per_Gallon, car.Cylinders, car.Horsepower, car.Weight_in_lbs, car.Year, car.Origin);
            _this.cars.push(newCar);
        });
    };
    Cars.prototype.removeCar = function (carId) {
        var carIndex = this.cars.filter(function (c) { return c.carId !== carId; });
        this.cars = carIndex;
        this.renderCars();
    };
    Cars.prototype.filterByOrigin = function (value) {
        var carFilteredByOrigin = this.cars.filter(function (c) { return c.Origin === value; });
        this.cars = carFilteredByOrigin;
        console.log("in filter " + value);
        this.renderFilteredCars();
    };
    Cars.prototype.filterByCylinders = function (value) {
        var carFilteredByCylinders = this.cars.filter(function (c) { return c.Cylinders === value; });
        this.cars = carFilteredByCylinders;
        console.log("in filter " + value);
        this.renderFilteredCars();
    };
    Cars.prototype.filterByMpg = function (value) {
        var carFilteredByMpg = this.cars.filter(function (c) { return c.Miles_per_Gallon === value; });
        this.cars = carFilteredByMpg;
        console.log("in filter " + value);
        this.renderFilteredCars();
    };
    Cars.prototype.updateCar = function (name) {
        var carToUpdate = this.cars.find(function (car) { return car.Name === name; });
        carToUpdate.Horsepower = 500;
        console.log(carToUpdate);
        this.renderCars();
    };
    Cars.prototype.getCarsFromStorage = function () {
        var tempCars = JSON.parse(localStorage.getItem("cars"));
        console.log(tempCars);
        this.cars.unshift(tempCars);
    };
    ;
    Cars.prototype.renderCars = function () {
        var table = document.querySelector(".table");
        this.cars.map(function (car) {
            var html = "<tbody>\n       <tr>\n        <td>" + car.Name + "</td>\n        <td>" + car.Miles_per_Gallon + "</td> \n        <td>" + car.Cylinders + "</td> \n        <td>" + car.Horsepower + "<button onclick='handleEdit(\"" + car.Name + "\")' >Make Me 500!</button></td> \n        <td>" + car.Weight_in_lbs + "</td> \n        <td>" + car.Year + "</td> \n        <td>" + car.Origin + "</td>\n        <td> <i onclick='handleDelete(\"" + car.carId + "\")' class=\"fas fa-trash\"></i></td>\n      </tr>";
            table.insertAdjacentHTML("afterbegin", html);
        });
    };
    ;
    Cars.prototype.renderFilteredCars = function () {
        var table = document.querySelector(".table");
        var html = "";
        this.cars.forEach(function (car) {
            html += "<tbody>\n       <tr>\n        <td>" + car.Name + "</td>\n        <td>" + car.Miles_per_Gallon + "</td> \n        <td>" + car.Cylinders + "</td> \n        <td>" + car.Horsepower + "<button onclick='handleEdit(\"" + car.Name + "\")' >Make Me 500!</button></td> \n        <td>" + car.Weight_in_lbs + "</td> \n        <td>" + car.Year + "</td> \n        <td>" + car.Origin + "</td>\n        <td> <i onclick='handleDelete(\"" + car.carId + "\")' class=\"fas fa-trash\"></i></td>\n      </tr>";
            table.innerHTML = html;
        });
    };
    ;
    return Cars;
}());
var cars = new Cars();
cars.getCarsFromStorage();
cars.addCars(carsData);
cars.renderCars();
function handleKeyUp(event) {
    console.log(event.key);
    // event.key
}
var handleEdit = function (carName) {
    console.log(carName);
    cars.updateCar(carName);
};
var handleDelete = function (carId) {
    console.log(carId);
    cars.removeCar(carId);
};
function handleSelect() {
    var originValue = document.querySelector("table #origin").value;
    cars.filterByOrigin(originValue);
}
function handleSelectCylinders() {
    var cylindersValue = document.querySelector("table #cylinders").value;
    cars.filterByCylinders(parseInt(cylindersValue));
}
function handleSelectmilesPerGallon() {
    var mpgValue = document.querySelector("table #milesPerGallon").value;
    cars.filterByMpg(parseFloat(mpgValue));
}
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
    ev.target.reset();
};
