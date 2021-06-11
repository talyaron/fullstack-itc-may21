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
 var currentDate = new Date().getFullYear();
 var answer = `${person.a} is currently ${currentDate - person.b.getFullYear()}`
 console.log(answer);
}
age(personA);
age(personB);

