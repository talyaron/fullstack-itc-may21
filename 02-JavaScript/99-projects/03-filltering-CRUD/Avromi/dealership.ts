interface CarInterface {    //YS: Your variables are capitalized, also some are snake_case. Use camelCase.
    Name: string;
    Miles_per_Gallon: number;
    Cylinders: number;
    Displacement: number;
    Horsepower: number;
    Weight_in_lbs: number;
    Acceleration: number;
    Year: Date;
    Origin: string;
}

class Car { //YS: Your variables are capitalized, also some are snake_case. Use camelCase.
    Name: string;
    Miles_per_Gallon: number;
    Cylinders: number;
    Displacement: number;
    Horsepower: number;
    Weight_in_lbs: number;
    Acceleration: number;
    Year: Date;
    Origin: string;
    carId: string;


    constructor(Name: string, Miles_per_Gallon: number, Cylinders: number,
        Horsepower: number, Weight_in_lbs: number, Year: Date, Origin: string) {

        this.Name = Name;
        this.Miles_per_Gallon = Miles_per_Gallon;
        this.Cylinders = Cylinders;
        this.Horsepower = Horsepower;
        this.Weight_in_lbs = Weight_in_lbs;
        this.Year = Year;
        this.Origin = Origin;
        this.carId = Math.random().toString(16).slice(2);
    }
}

class Cars {
    cars: Array<Car> = [];


    add(car: Car) {
        this.cars.push(car)
        addNewOrigin()
        addNewCylinders()
        addNewMpg();
        console.log(cars); //YS: Dont leave console.logs in your code. 
        localStorage.setItem(`cars`, JSON.stringify(cars))
    };



    addCars(carsArray: Array<Car | CarInterface>) {
        carsArray.forEach(car => {
            const newCar = new Car(car.Name, car.Miles_per_Gallon, car.Cylinders, car.Horsepower,
                car.Weight_in_lbs, car.Year, car.Origin)
            this.cars.push(newCar);
        })

    }

    removeCar(carId: string) {
        const carIndex = this.cars.filter((c) => c.carId !== carId);
        this.cars = carIndex
        this.renderCars(this.cars);
    }

    filter(mpgValue, cylindersValue, originValue) {
        let filteredArray = this.cars
        if (mpgValue !== "undefined") {
            console.log(filteredArray);
            filteredArray = filteredArray.filter(car => car.Miles_per_Gallon === Number(mpgValue))
            console.log(filteredArray);
        }
        if (cylindersValue !== "undefined") {
            console.log(filteredArray);
            filteredArray = filteredArray.filter(car => car.Cylinders === parseFloat(cylindersValue))
            console.log(filteredArray);
        }
        if (originValue !== "undefined") {
            console.log(filteredArray);
            filteredArray= filteredArray.filter(car => car.Origin === originValue)
            console.log(filteredArray);
        }
        console.log(filteredArray);
        this.renderCars(filteredArray)
    }

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

    updateCar(name: string) { //YS: Wheres the form? 
        const carToUpdate = this.cars.find(car => car.Name === name)
        carToUpdate.Horsepower = 500;
        console.log(carToUpdate);
        this.renderCars(this.cars)
    }

    getCarsFromStorage() {
        const tempCars = JSON.parse(localStorage.getItem(`cars`))
        console.log(tempCars); //YS: console.log
        this.cars.unshift(tempCars);
    };



    renderCars(arrToRender: Array<Car>) {

        const table: HTMLElement = document.querySelector(".table")
        let html ="";
        arrToRender.forEach((car) => { //YS: In this case its better to use forEach since you dont need to return an array (map returns an array)

             html += `<tbody>
       <tr>
        <td>${car.Name}</td>
        <td>${car.Miles_per_Gallon}</td> 
        <td>${car.Cylinders}</td> 
        <td>${car.Horsepower}<button onclick='handleEdit("${car.Name}")' >Make Me 500!</button></td> 
        <td>${car.Weight_in_lbs}</td> 
        <td>${car.Year}</td> 
        <td>${car.Origin}</td>
        <td> <i onclick='handleDelete("${car.carId}")' class="fas fa-trash"></i></td>
      </tr>`;
            

        });
        table.innerHTML = html
    }

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


const cars = new Cars();

cars.getCarsFromStorage();

cars.addCars(carsData)

cars.renderCars(cars.cars);

function handleKeyUp(event) {
    console.log(event.key);
    // event.key
}

const handleSelectedFilter = (event) => {
    event.preventDefault()
    const formElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.elements
    const mpgValue = formElement.milesPerGallon.value;
    const cylindersValue = formElement.cylinders.value;
    const originValue = formElement.origin.value;

    console.log(mpgValue, cylindersValue, originValue);
    cars.filter(mpgValue, cylindersValue, originValue)
}

const handleEdit = (carName) => {
    console.log(carName); //YS: console.log
    cars.updateCar(carName);
}
const handleDelete = (carId: string): void => {
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



const handleSubmit = (ev: any): void => {
    ev.preventDefault();

    const Name: string = ev.target.elements.Name.value;
    const Miles_per_Gallon: number = ev.target.elements.Miles_per_Gallon.value;
    const Cylinders: number = ev.target.elements.Cylinders.value;
    const Horsepower: number = ev.target.elements.Horsepower.value;
    const Weight_in_lbs: number = ev.target.elements.Weight_in_lbs.value;
    const Year: Date = ev.target.elements.Year.value;
    const Origin: string = ev.target.elements.Origin.value;

    const car = new Car(Name, Miles_per_Gallon, Cylinders, Horsepower, Weight_in_lbs, Year, Origin)
    cars.add(car);
    cars.renderCars(cars.cars)
    ev.target.reset()
}













