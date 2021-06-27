

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
    removeCar(carId: string){
        this.cars = this.cars.filter((c)=> c.carId !== carId);
        this.renderCars();
    }
    getCarsFromStorage() {
        JSON.parse(localStorage.getItem(`cars`))
    };
    renderCars() {
        const table: HTMLElement = document.querySelector(".table")
        let html: string = "";
        this.cars.forEach((car) => {
            
           html += ` <tbody>
       <tr>
        <td>${car.name}</td>
        <td>${car.milesPerGallon}</td> 
        <td>${car.cylinders}</td> 
        <td>${car.horsepower}</td> 
        <td>${car.weightLb}</td> 
        <td>${car.year}</td> 
        <td>${car.origin}</td>
        <td> <i onclick="handleDelete("${car.carId}")" class="fas fa-trash"></i></td>
      </tr>`;
      console.log(html);
      table.innerHTML = html;
        });
    };
    

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
    console.log(cars)
    ev.target.reset()
}

const handleDelete = (carId:string):void =>{
    console.log(carId);
    cars.removeCar(carId);
};
