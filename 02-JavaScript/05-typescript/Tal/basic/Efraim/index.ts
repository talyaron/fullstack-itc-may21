interface People {
    a: string,
    b: Date
}
var personA: People = {
    a: `John Doe`,
    b: new Date (1994, 10, 22)
}

var personB: People = {
    a: `Dustin Martin`,
    b: new Date (1980, 8, 3)
}



var age = (person: People): void => {
 var currentYear: number = new Date().getFullYear();
 var answer: string = `${person.a} is currently ${currentYear - person.b.getFullYear()}`;
 console.log(answer);
}

age(personA);
age(personB);

