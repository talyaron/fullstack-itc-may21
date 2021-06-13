// create a function in typescript that gets the sallery 
// as an anual sallery (number), and return a string saying
//  "your avarage monthly sallery is:x";
function getSalary(a) {
    var x = a / 12;
    return "your avarage monthly salary is " + x;
}
console.log(getSalary(12000));
var one = {
    name: "Avromi",
    birthYear: 1990
};
var two = {
    name: "Jim",
    birthYear: 1984
};
var three = {
    name: "Sammy",
    birthYear: 1999
};
var getName = function (person) {
    var hisName = person.name;
    return hisName;
};
var getAge = function (person) {
    var currentYear = new Date().getFullYear();
    var bday = person.birthYear;
    return currentYear - bday;
};
console.log(getAge(one));
console.log(getAge(two));
console.log("Hello, " + getName(two) + " you are " + getAge(two) + " years old!!");
// console.log(new Date().getFullYear())
