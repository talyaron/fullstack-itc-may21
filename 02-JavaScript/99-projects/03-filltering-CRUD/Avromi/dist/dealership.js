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
        //     const table: HTMLElement = document.querySelector(".table")
        //    let html =""
        //     this.cars.forEach((car) => {
        //       html += `<tbody>
        //    <tr>
        //     <td>${car.Name}</td>
        //     <td>${car.Miles_per_Gallon}</td> 
        //     <td>${car.Cylinders}</td> 
        //     <td>${car.Horsepower}<button onclick='handleEdit("${car.Name}")' >Make Me 500!</button></td> 
        //     <td>${car.Weight_in_lbs}</td> 
        //     <td>${car.Year}</td> 
        //     <td>${car.Origin}</td>
        //     <td> <i onclick='handleDelete("${car.carId}")' class="fas fa-trash"></i></td>
        //   </tr>`;
        //         table.innerHTML = html 
        //     });
        // };
    }
    Cars.prototype.add = function (car) {
        this.cars.push(car);
        addNewOrigin();
        addNewCylinders();
        addNewMpg();
        console.log(cars); //YS: Dont leave console.logs in your code. 
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
        this.renderCars(this.cars);
    };
    Cars.prototype.filter = function (mpgValue, cylindersValue, originValue) {
        var filteredArray = this.cars;
        if (mpgValue !== "undefined") {
            console.log(filteredArray);
            filteredArray = filteredArray.filter(function (car) { return car.Miles_per_Gallon === Number(mpgValue); });
            console.log(filteredArray);
        }
        if (cylindersValue !== "undefined") {
            console.log(filteredArray);
            filteredArray = filteredArray.filter(function (car) { return car.Cylinders === parseFloat(cylindersValue); });
            console.log(filteredArray);
        }
        if (originValue !== "undefined") {
            console.log(filteredArray);
            filteredArray = filteredArray.filter(function (car) { return car.Origin === originValue; });
            console.log(filteredArray);
        }
        console.log(filteredArray);
        this.renderCars(filteredArray);
    };
    // filterByOrigin(value) {  /*YS: DRY, all of these filter functions are basically the same. The only thing 
    //                                 that changed was the value and by what to filter (couldve also been a parameter)*/
    //     const carFilteredByOrigin = this.cars.filter(c => c.Origin === value);
    //     console.log(`in filter ` + value);
    //     this.renderCars(carFilteredByOrigin);
    // }
    // filterByCylinders(value) {
    //     const carFilteredByCylinders = this.cars.filter(c => c.Cylinders === value);
    //     console.log(`in filter ` + value);
    //     this.renderCars(carFilteredByCylinders);
    // }
    // filterByMpg(value) {
    //     const carFilteredByMpg = this.cars.filter(c => c.Miles_per_Gallon === value);
    //     // this.cars = carFilteredByMpg
    //     console.log(`in filter ` + value);
    //     this.renderCars(carFilteredByMpg);
    // }
    Cars.prototype.updateCar = function (name) {
        var carToUpdate = this.cars.find(function (car) { return car.Name === name; });
        carToUpdate.Horsepower = 500;
        console.log(carToUpdate);
        this.renderCars(this.cars);
    };
    Cars.prototype.getCarsFromStorage = function () {
        var tempCars = JSON.parse(localStorage.getItem("cars"));
        console.log(tempCars); //YS: console.log
        this.cars.unshift(tempCars);
    };
    ;
    Cars.prototype.renderCars = function (arrToRender) {
        var table = document.querySelector(".table");
        var html = "";
        arrToRender.forEach(function (car) {
            html += "<tbody>\n       <tr>\n        <td>" + car.Name + "</td>\n        <td>" + car.Miles_per_Gallon + "</td> \n        <td>" + car.Cylinders + "</td> \n        <td>" + car.Horsepower + "<button onclick='handleEdit(\"" + car.Name + "\")' >Make Me 500!</button></td> \n        <td>" + car.Weight_in_lbs + "</td> \n        <td>" + car.Year + "</td> \n        <td>" + car.Origin + "</td>\n        <td> <i onclick='handleDelete(\"" + car.carId + "\")' class=\"fas fa-trash\"></i></td>\n      </tr>";
        });
        table.innerHTML = html;
    };
    return Cars;
}());
var cars = new Cars();
cars.getCarsFromStorage();
cars.addCars(carsData);
cars.renderCars(cars.cars);
function handleKeyUp(event) {
    console.log(event.key);
    // event.key
}
var handleSelectedFilter = function (event) {
    event.preventDefault();
    var formElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.elements;
    var mpgValue = formElement.milesPerGallon.value;
    var cylindersValue = formElement.cylinders.value;
    var originValue = formElement.origin.value;
    console.log(mpgValue, cylindersValue, originValue);
    cars.filter(mpgValue, cylindersValue, originValue);
};
var handleEdit = function (carName) {
    console.log(carName); //YS: console.log
    cars.updateCar(carName);
};
var handleDelete = function (carId) {
    console.log(carId); //YS: console.log
    cars.removeCar(carId);
};
// function handleSelect() {
//     const originValue = document.querySelector("table #origin").value;
//     cars.filterByOrigin(originValue)
// }
// function handleSelectCylinders() {
//     const cylindersValue = document.querySelector("table #cylinders").value;
//     cars.filterByCylinders(parseInt(cylindersValue))
// }
// function handleSelectmilesPerGallon() {
//     const mpgValue = document.querySelector("table #milesPerGallon").value;
//     cars.filterByMpg(parseFloat(mpgValue))
// }
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
    cars.renderCars(cars.cars);
    ev.target.reset();
};
