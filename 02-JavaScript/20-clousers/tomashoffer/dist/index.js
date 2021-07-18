// 1) create a closure function.
// the function will get the name of the resident
// welcome('Efraim')
// -> Hello Efraim, You are resident number 1
// the function will return "Hello <Name>, you are resident number X", and it will count the number of residents
// 2) create a function that will hold all the name of the residents in its closure.
// if the input arguement is 'l' return an array with all the residents
// welcome('l')...
// 3) create it for building A, and for building B;
var residents = [];
var allResidents = resident();
var residentsA = resident();
var residentsB = resident();
function resident() {
    var counter = 0;
    var arrayName = [];
    function welcome(name) {
        arrayName.push(name);
        var nombreResidente = name;
        counter++;
        if (name === "l")
            console.log(arrayName);
        return 'Hello ' + nombreResidente + ', you are resident number ' + counter;
    }
    return welcome;
}
var newResident = resident();
console.log(newResident("Tomas"));
console.log(newResident('Matias'));
function handleResidentsA(ev) {
    try {
        ev.preventDefault();
        var resident_1 = ev.target.elements.residentes.value;
        console.log(residentsA(resident_1));
    }
    catch (error) {
        console.error(error);
    }
}
function handleResidentsB(ev) {
    try {
        ev.preventDefault();
        var resident_2 = ev.target.elements.residentes.value;
        console.log(residentsB(resident_2));
    }
    catch (error) {
        console.error(error);
    }
}
var arrayResidents = [];
function residentHold() {
    var counter = 0;
    function welcomeResident(name) {
        arrayResidents.push(name);
        arrayResidents.map(function (resident) {
            return "Hello " + resident.name + ", you are resident number " + counter;
        });
    }
    return welcomeResident;
}
var newResidentHold = residentHold();
newResidentHold('Shiran');
newResidentHold('Julie');
newResidentHold('Ariana');
console.log(residentHold());
