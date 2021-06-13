// 2nd exercise:
// create 3 persons with their B-days (in object {name, day-of-birth})
// calculate how old are they.
var person1 = {
    name: "moshe",
    yearOfBirth: 1956
};
var person2 = {
    name: "shimon",
    yearOfBirth: 1874
};
var person3 = {
    name: "yaakov",
    yearOfBirth: 1420
};
var HowOld = function (person) {
    var currentYear = new Date().getFullYear();
    var year = person.yearOfBirth;
    var age = currentYear - year;
    return age;
};
console.log(person1.name + ", your age is:" + HowOld(person1));
console.log(person2.name + ", your age is:" + HowOld(person2));
console.log(person3.name + ", your age is:" + HowOld(person3));
