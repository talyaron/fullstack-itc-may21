interface CarInterface {
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

class Car {
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


    constructor(Name: string, Miles_per_Gallon: number, Cylinders: number, Horsepower: number, Weight_in_lbs: number, Year: Date, Origin: string) {

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
        console.log(cars);
        localStorage.setItem(`cars`, JSON.stringify(cars))
    };



    addCars(carsArray: Array<Car | CarInterface>) {
        carsArray.forEach(car => {
            const newCar = new Car(car.Name, car.Miles_per_Gallon, car.Cylinders, car.Horsepower, car.Weight_in_lbs, car.Year, car.Origin)
            this.cars.push(newCar);
        })

    }

    removeCar(carId: string) {
        const carIndex = this.cars.filter((c) => c.carId !== carId);
        this.cars = carIndex
        this.renderCars();
    }

    filterByOrigin(value) {
        const carFilteredByOrgin = this.cars.filter(c => c.Origin === value);
        this.cars = carFilteredByOrgin
        this.renderCars();
    }
    filterByCylinders(value) {
        const carFilteredByCylinders = this.cars.filter(c => c.Cylinders === value);
        this.cars = carFilteredByCylinders
        console.log(`in filter ` + value);
        this.renderCars();
    }

    updateCar(name: string) {
        const carToUpdate = this.cars.find(car => car.Name === name)
        carToUpdate.Horsepower = 500;
        console.log(carToUpdate);
        this.renderCars()
    }

    getCarsFromStorage() {
        const tempCars = JSON.parse(localStorage.getItem(`cars`))
        console.log(tempCars);
        this.cars.unshift(tempCars);
    };



    renderCars() {

        const table: HTMLElement = document.querySelector(".table")
        let html: string = "";
        this.cars.forEach((car) => {

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

            table.innerHTML = html;
            // table.insertAdjacentHTML(`afterbegin`, html)
        });
    };

}

const cars = new Cars();

cars.getCarsFromStorage();

cars.addCars(carsData)

cars.renderCars();


const handleEdit = (carName) => {
    console.log(carName);
    cars.updateCar(carName);
}
const handleDelete = (carId: string): void => {
    console.log(carId);
    cars.removeCar(carId);
};
function handleSelect() {
    const originValue = document.querySelector("table #origin").value;

    cars.filterByOrigin(originValue)

}

function handleSelectCylinders() {
    const cylindersValue = document.querySelector("table #cylinders").value;
    cars.filterByCylinders(parseInt(cylindersValue))
}



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
    cars.renderCars()
    ev.target.reset()
}













