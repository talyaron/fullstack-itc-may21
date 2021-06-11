/* create a function in typescript that gets the sallery as an anual sallery (number), and return a string saying "your avarage monthly sallery is:x"; */


/* 2nd exercise:
create 3 persons with their B-days (in object {name, day-of-birth})
calculate how old are they.

 */


/* ANSWERS
1st excercise: 
 */

let anualSalary: number = 1000;

function saySalary(): string {
    return `Your annual salary will be ${anualSalary / 12}`
};

console.log(saySalary());

/* 2nd excercise: 
 */
interface People {
    name: string,
    bday: Date,
};

const person1: People = {
    name: 'Leonardo',
    bday: new Date("1991-08-09")
};

const person2: People = {
    name: 'Marcelo',
    bday: new Date("1975-04-24")
};

const person3: People = {
    name: 'Pepe',
    bday: new Date("2005-05-12")
};


const calculateDate = (persona: People): void => {
    let actualDate = new Date();
    let person = persona.bday.getFullYear();
    let years = actualDate.getFullYear();
    console.log(`The age of ${persona.name} is ${years - person}`)
};

calculateDate(person3);