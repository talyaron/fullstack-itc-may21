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



var age = (person: People): string => {
 const currentYear: number = new Date().getFullYear();
 const answer: string = `${person.a} is currently ${currentYear - person.b.getFullYear()} years old`;
 return answer;
}

console.log(age(personA));
age(personB);

