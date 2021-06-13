class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    sayName(): string {
        return `my name is ${this.name}`;
    }

}

interface Car {
    model: string,
    brand: string
}

class Cars {
    car: Car;
    owners: Array<string>;
    root:HTMLDivElement | null;
    constructor(car: Car) {
        this.car = car;
        this.owners = [];
        this.root = document.querySelector('#root');
    }
    tellCar(): string {
        const message =  `the car is a ${this.car.brand} model ${this.car.model}`;
        this.root.innerText = message;
        return message;
    }
    
    addOwner(owner:Person): Array<string> {
        this.owners.push(owner.name);
        return this.owners;
    }
}

const moses = new Person('moses');
console.log(moses.sayName());

let myCar = new Cars({ model: 'focos', brand: 'ford' });
let model = myCar.tellCar();

console.log(model);

const owners = myCar.addOwner(moses);
console.log(owners);

console.dir(document.querySelector('#root'));