

class Car {
    name: string;
    milesPerGallon: number;
    cylinders: number;
    horsepower: number;
    weightLb: number;
    year: number;
    origin: string;
    carId: string;


    constructor(name: string, milesPerGallon: number, cylinders: number, horsepower: number, weightLb: number, year: number, origin: string, carId: string) {

        this.name = name;
        this.milesPerGallon = milesPerGallon;
        this.cylinders = cylinders;
        this.horsepower = horsepower;
        this.weightLb = weightLb;
        this.year = year;
        this.origin = origin;
        this.carId = carId;
    }
}

class Cars {
    cars: Array<Car> = [];

    add(car: Car) {
        this.cars.push(car)
        localStorage.setItem(`cars`, JSON.stringify(cars))
    };
    getCarsFromStorage() {
        JSON.parse(localStorage.getItem(`cars`))
    };
    renderCars() {

        this.cars.forEach((car) => {
            const table: HTMLElement = document.querySelector(".table")
            const html = `   <tbody>
       <tr>
        <td>${car.name}</td>
        <td>${car.milesPerGallon}</td> 
        <td>${car.cylinders}</td> 
        <td>${car.horsepower}</td> 
        <td>${car.weightLb}</td> 
        <td>${car.year}</td> 
        <td>${car.origin}</td>
        <td> <i class="fas fa-trash" onclick="handleDelete(${car.carId})"></i></td>
      </tr>`
      table.insertAdjacentHTML(`afterbegin`, html)
        });
    };
    handleDelete(ev){
        this.cars.filter((ev=> ev !== carId)
        console.log(ev);
    }
}

const cars = new Cars();




const handleSubmit = (ev: any): void => {
    ev.preventDefault();

    const name: string = ev.target.elements.name.value;
    const milesPerGallon: number = ev.target.elements.milesPerGallon.value;
    const cylinders: number = ev.target.elements.cylinders.value;
    const horsepower: number = ev.target.elements.horsepower.value;
    const weightLb: number = ev.target.elements.weightLb.value;
    const year: number = ev.target.elements.year.value;
    const origin: string = ev.target.elements.origin.value;
    const carId: string = Math.random().toString(16).slice(2);

    const car = new Car(name, milesPerGallon, cylinders, horsepower, weightLb, year, origin, carId)
    cars.add(car);
    cars.renderCars()
    cars.getCarsFromStorage();
    console.log(cars)
    ev.target.reset()
}

