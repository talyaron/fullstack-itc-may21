var personA = {
    a: "John Doe",
    b: new Date(1994, 10, 22)
};
var personB = {
    a: "Dustin Martin",
    b: new Date(1980, 8, 3)
};
var age = function (person) {
    var currentYear = new Date().getFullYear();
    var answer = person.a + " is currently " + (currentYear - person.b.getFullYear());
    console.log(answer);
};
age(personA);
age(personB);
