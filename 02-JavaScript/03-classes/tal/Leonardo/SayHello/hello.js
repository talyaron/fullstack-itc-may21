class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hola mi nombre es ${this.name}`);
    }
    sayBye() {
        console.log(`Mi nombre es ${this.name} y me despido`);
    }
}

let person1 = new Person("Carlos")
person1.sayHello();

let person2 = new Person("Juan")
person2.sayBye();
