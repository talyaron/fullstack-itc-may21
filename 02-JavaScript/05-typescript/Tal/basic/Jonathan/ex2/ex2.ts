
interface Person {
    name: string,
    bday: number
}

var person1: Person = {
    name: 'Joe',
    bday: 1980
}

var person2: Person = {
    name: 'George',
    bday: 1981
}

var person3: Person = {
    name: 'Roll',
    bday: 1982
}



var getAge = (person:Person):number => {
    
    var currentYear:number = new Date().getFullYear();

    return currentYear - person.bday;

}

console.log(`Person: ${person1.name}, ${getAge(person1)}`)

console.log(`Person: ${person2.name}, ${getAge(person2)}`)

console.log(`Person: ${person3.name}, ${getAge(person3)}`)




/*https://www.typescriptlang.org/docs/handbook/basic-types.html#array*/
