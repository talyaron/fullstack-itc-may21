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
    b: new Date (1994, 10, 22)
}

console.log(personA);