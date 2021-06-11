/* create a function in typescript that gets the sallery as an anual sallery (number), and return a string saying "your avarage monthly sallery is:x"; */
/* 2nd exercise:
create 3 persons with their B-days (in object {name, day-of-birth})
calculate how old are they.

 */
/* ANSWERS
1st excercise:
 */
var anualSalary = 1000;
function saySalary() {
    return "Your annual salary will be " + anualSalary / 12;
}
;
console.log(saySalary());
;
var person1 = {
    name: 'Leonardo',
    bday: new Date("1991-08-09")
};
var person2 = {
    name: 'Marcelo',
    bday: new Date("1975-04-24")
};
var person3 = {
    name: 'Pepe',
    bday: new Date("2005-05-12")
};
var calculateDate = function (persona) {
    var actualDate = new Date().getFullYear();
    var person = persona.bday.getFullYear();
    console.log("The age of " + persona.name + " is " + (actualDate - person));
};
calculateDate(person3);
