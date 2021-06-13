function Avrg(x) {
    var avrgMonth = x / 12;
    var avrgString = avrgMonth.toString();
    return "Your avrage for month is:" + avrgString + " ";
}
console.log(Avrg(156000));
var person1 = {
    name: 'Raziel',
    bDay: 1993
};
var person2 = {
    name: 'Dan',
    bDay: 1947
};
var person3 = {
    name: 'Moshe',
    bDay: 875
};
var getAge = function (Person) {
    var currentDate = new Date().getFullYear();
    var currentYear = Person.bDay;
    var differnce = currentDate - currentYear;
    return differnce;
};
console.log(person1.name, getAge(person1));
console.log(person2.name, getAge(person2));
console.log(person3.name, getAge(person3));
