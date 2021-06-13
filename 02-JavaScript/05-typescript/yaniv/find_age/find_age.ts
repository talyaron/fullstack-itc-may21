// create 3 persons with their B-years (in object {name, year-of-birth})
// calculate how old are they.

// export {}

class Person {
    name : string;
    birthYear : number;
    
    constructor(name : string, birthYear : number) {
        this.name = name;
        this.birthYear = birthYear;
    }
}

interface perType {
    name: string,
    birthYear: number
}

var findAge = (person : perType) : number => {
    const currentYear: number = new Date().getFullYear();
    const age : number = currentYear - person.birthYear;
    return age;
}

const per1 = new Person('Yaniv',1988);
const per2 = new Person('Tal',1980);
const per3 = new Person('Metushelach',-2000);

console.log(`${per1.name}, You are ${findAge(per1)} years old!`);
console.log(`${per2.name}, You are ${findAge(per2)} years old!`);
console.log(`${per3.name}, You are ${findAge(per3)} years old!`);