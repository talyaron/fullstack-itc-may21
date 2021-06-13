var person1 = {
    name: 'Joe',
    bday: 1980
};
var person2 = {
    name: 'George',
    bday: 1981
};
var person3 = {
    name: 'Roll',
    bday: 1982
};
var getAge = function (person) {
    var currentYear = new Date().getFullYear();
    return currentYear - person.bday;
};
console.log("Person: " + person1.name + ", " + getAge(person1));
console.log("Person: " + person2.name + ", " + getAge(person2));
console.log("Person: " + person3.name + ", " + getAge(person3));
/*https://www.typescriptlang.org/docs/handbook/basic-types.html#array*/
