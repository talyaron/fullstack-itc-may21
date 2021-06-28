interface CarInterface {
    Name: string;
    Miles_per_Gallon: number;
    Cylinders: number;
    Displacement:number;
    Horsepower: number;
    Weight_in_lbs: number;
    Acceleration:number;
    Year: string;
    Origin: string;
}

class Car {
    Name: string;
    Miles_per_Gallon: number;
    Cylinders: number;
    Displacement:number;
    Horsepower: number;
    Weight_in_lbs: number;
    Acceleration:number;
    Year: string;
    Origin: string;
    carId: string;


    constructor(Name: string, Miles_per_Gallon: number, Cylinders: number, Horsepower: number, Weight_in_lbs: number, Year: string, Origin: string) {

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
        localStorage.setItem(`cars`, JSON.stringify(cars))
    };
    
    addCars(carsArray:Array<Car|CarInterface>){
        carsArray.forEach(car=>{
            const newCar = new Car(car.Name, car.Miles_per_Gallon, car.Cylinders, car.Horsepower, car.Weight_in_lbs, car.Year,car.Origin)
            this.cars.push(newCar);
        })
        console.log(this.cars);
       
    }

    removeCar(carId: string){
        const carIndex = this.cars.findIndex((c)=> c.carId === carId);
        this.cars.splice(carIndex, 1);
        this.renderCars();
    }
    getCarsFromStorage() {
        JSON.parse(localStorage.getItem(`cars`))
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
        <td>${car.Horsepower}</td> 
        <td>${car.Weight_in_lbs}</td> 
        <td>${car.Year}</td> 
        <td>${car.Origin}</td>
        <td> <i  class="fas fa-trash"></i></td>
      </tr>`;
      
      table.innerHTML = html;
        });
    };
    

}

const cars = new Cars();
cars.addCars(carsData)
cars.renderCars();




const handleSubmit = (ev: any): void => {
    ev.preventDefault();

    const Name: string = ev.target.elements.Name.value;
    const Miles_per_Gallon: number = ev.target.elements.Miles_per_Gallon.value;
    const Cylinders: number = ev.target.elements.Cylinders.value;
    const Horsepower: number = ev.target.elements.Horsepower.value;
    const Weight_in_lbs: number = ev.target.elements.Weight_in_lbs.value;
    const Year: number = ev.target.elements.Year.value;
    const Origin: string = ev.target.elements.Origin.value;
   
    const car = new Car(Name, Miles_per_Gallon, Cylinders, Horsepower, Weight_in_lbs, Year, Origin)
    cars.add(car);
    cars.renderCars()
    console.log(cars)
    ev.target.reset()
}

const handleDelete = (carId:string):void =>{
    console.log(carId);
    cars.removeCar(carId);
};
