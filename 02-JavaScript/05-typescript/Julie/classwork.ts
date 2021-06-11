export { }

function monthlySalary = (annualSalary : number) : number => {
    const monthly : number = annualSalary/12;
    return monthly;
}

const yearly = 100000;
console.log(`Your avarage monthly salary is ${monthlySalary(yearly)}`);

interface Person {
    name: string,
    date: number,
    month: number;
    year: number;
}
var person1: Person = {
    name: "Julie",
    birthdate: 31,
    birthmonth: 10,
    birthyear: 1979,
}

var person2: Person = {
    name: "Yossi",
    birthdate: 11,
    birthmonth: 6,
    birthyear: 1965,
}

var person3: Person = {
    name: "Yishai",
    birthdate: 26,
    birthmonth: 10,
    birthyear: 2012,
}

var today: number = {
    name: "Yishai",
    currentdate: 11,
    currentmonth: 6,
    currentyear: 2021,
}

function getAge 
// Here, we need the current 