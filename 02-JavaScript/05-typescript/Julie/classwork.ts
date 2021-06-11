export { }

function monthlySalary = (annualSalary : number) : number => {
    const monthly : number = annualSalary/12;
    return monthly;
}

const yearly = 100000;
console.log(`Your avarage monthly salary is ${monthlySalary(yearly)}`);

// Use interface for simple objects, and class for more complex ones, including methods.

interface Person {
    name: string,
    // date: number,
    // month: number;
    year: number;
}
var person1: Person = {
    name: "Julie",
    // birthdate: 31,
    // birthmonth: 10,
    birthyear: 1979,
}

var person2: Person = {
    name: "Yossi",
    // birthdate: 11,
    // birthmonth: 6,
    birthyear: 1965,
}

var person3: Person = {
    name: "Yishai",
    // birthdate: 26,
    // birthmonth: 10,
    birthyear: 2012,
}


var getAge = (person:Person):string => {
    const currentYear:number = new Date().getFullYear();
    const yearOfBirth: number = person.birthyear;
    const difference:number = currentYear - yearOfBirth;
    return `${person.name}, your age is ${difference}`
} 
    