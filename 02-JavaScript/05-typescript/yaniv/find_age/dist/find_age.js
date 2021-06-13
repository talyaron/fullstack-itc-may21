// create 3 persons with their B-years (in object {name, year-of-birth})
// calculate how old are they.
// export {}
var Person = /** @class */ (function () {
    function Person(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    return Person;
}());
var findAge = function (person) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - person.birthYear;
    return age;
};
var per1 = new Person('Yaniv', 1988);
var per2 = new Person('Tal', 1980);
var per3 = new Person('Metushelach', -2000);
console.log(per1.name + ", You are " + findAge(per1) + " years old!");
console.log(per2.name + ", You are " + findAge(per2) + " years old!");
console.log(per3.name + ", You are " + findAge(per3) + " years old!");
