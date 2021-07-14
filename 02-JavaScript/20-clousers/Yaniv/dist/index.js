// 1) create a closure function.
// the function will get the name of the resident
// welcome('Efraim')
// -> Hello Efraim, You are resident number 1
// the function will return "Hello <Name>, you are resident number X", and it will count the number of residents
// 2) create a function that will hold all the name of the residents in its closure.
// if the input arguement is 'l' return an array with all the residents
// welcome('l')...
// 3) create it for bulding A, and for bulding B;
function welcome() {
    var residents = [];
    function personalWelcome(resident) {
        if (resident === 'l')
            return residents;
        residents.push(resident);
        return "Welcome " + resident + ", you are resident number " + residents.length;
    }
    return personalWelcome;
}
var buildingA = welcome();
var buildingB = welcome();
function handleResidentBuildingA(ev) {
    ev.preventDefault();
    var resident = ev.target.elements.resident.value;
    console.log(buildingA(resident));
    ev.target.reset();
}
function handleResidentBuildingB(ev) {
    ev.preventDefault();
    var resident = ev.target.elements.resident.value;
    console.log(buildingB(resident));
    ev.target.reset();
}
