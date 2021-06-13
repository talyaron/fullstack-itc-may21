
// create a function in typescript that gets the sallery 
// as an anual sallery (number), and return a string saying
//  "your avarage monthly sallery is:x";


function getSalary(a:number):string{
    let x = a / 12;
    return `your avarage monthly salary is ${x}`;
}
console.log(getSalary(12000));

// create 3 persons with their B-days 
// (in object {name, day-of-birth})
// calculate how old are they.

interface Person {
    name: string;
    birthYear: number;
  }

var one: Person = {
    name: `Avromi`,
    birthYear: 1990,
}

var two: Person = {
    name: `Jim`,
    birthYear: 1984,
}

var three: Person = {
    name: `Sammy`,
    birthYear: 1999,
}

var getName = (person:Person):string=>{
    const hisName = person.name
    return hisName
}

var getAge = (person:Person):number =>{
    const currentYear:number = new Date().getFullYear();
    const bday:number = person.birthYear
    return  currentYear - bday
}
console.log(getAge(one));
console.log(getAge(two));
console.log(`Hello, ${getName(two)} you are ${getAge(two)} years old!!`);





// console.log(new Date().getFullYear())