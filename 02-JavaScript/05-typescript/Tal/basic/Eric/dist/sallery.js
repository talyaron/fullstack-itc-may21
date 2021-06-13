function sallery(sallery) {
    var monthly = sallery / 12;
    return "your avarage sallery is: " + monthly;
}
console.log(sallery(100000));
;
var person1 = {
    yearOfBirth: 1992,
    name: "Tomas"
};
var person2 = {
    yearOfBirth: (1 - 3 - 1992),
    name: "Jon"
};
var person3 = {
    yearOfBirth: (1 - 6 - 1992),
    name: "Jon"
};
var Howold = function (person) {
    var currentYear = new Date().getFullYear();
    var year = person.yearOfBirth;
    var age = currentYear - year;
    return age;
};
console.log(person1.name + ", Your age is: " + Howold(person1));
