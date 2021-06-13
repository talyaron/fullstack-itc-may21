function sallery(sallery:number):string {
    let monthly:number = sallery / 12;
    return `your avarage sallery is: ${monthly}`;
}

console.log(sallery(100000));


//create a function in typescript that gets the sallery as an anual sallery (number), 
//and return a string saying "your avarage monthly sallery is:x";

//2nd exercise:
//create 3 persons with their B-days (in object {name, day-of-birth})
//calculate how old are they.


interface bdays{ 
    yearOfBirth:number; 
    name:string ;
 };

 var person1: bdays = { 
    yearOfBirth:1992, 
    name:"Tomas" 
 };
 var person2: bdays = { 
    yearOfBirth:(1-3-1992), 
    name:"Jon" 
 };

 var person3: bdays = { 
    yearOfBirth:(1-6-1992), 
    name:"Jon" 
 };

 var Howold = (person:bdays):number=>{
    const currentYear: number = new Date().getFullYear();
    const year: number= person.yearOfBirth;
    const age: number= currentYear-year;
    return age;
}

console.log(`${person1.name}, Your age is: ${Howold(person1)}`)
