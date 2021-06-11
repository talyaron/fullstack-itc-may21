// create 3 persons with their B-years (in object {name, year-of-birth})
// calculate how old are they.

// export {}

class Person {
    name : string;
    birthYear : number;
    currentYear : number;
    age : number;

    constructor(name : string, birthYear : number) {
        this.name = name;
        this.birthYear = birthYear;
    }

    findAge() : number {
        this.currentYear = new Date().getFullYear();
        this.age = this.currentYear - this.birthYear;
        return this.age;
    }
}

const per1 = new Person('Yaniv',1988);
const per2 = new Person('Tal',1980);
const per3 = new Person('Metushelach',-2000);

console.log(`${per1.name}, You are ${per1.findAge()} years old!`);
console.log(`${per2.name}, You are ${per2.findAge()} years old!`);
console.log(`${per3.name}, You are ${per3.findAge()} years old!`);