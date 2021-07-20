/*
Instructions:
1)Write a closure function that will get the name of a resident:
Welcome('Efraim')
-> Hello, Efraim. You are resident number 1.

The function will return "Hello, resident. You are resident number X" and will count the number of residents.

2)Create a closure function that holds in its closure the names of all residents.
If the input argument is 'l', return an array with all residents --- welcome(l)

3)Create it for building A and building B.
*/
var _this = this;
var Resident = /** @class */ (function () {
    function Resident(name) {
        this.name = name;
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    return Resident;
}());
var addResident = function (resident) {
    try {
        if (!resident)
            throw new Error("No resident found");
        _this.residentList.unshift(resident);
    }
    catch (error) {
        console.error(error);
    }
};
function residentCounter() {
    var count = 0;
    return function () {
        count++;
    };
}
var residentListA = residentCounter();
var residentListB = residentCounter();
var displayResidents = function () {
    var residentList = [];
    var residentsInBuilding = function (resident) {
        if (resident.name === 'l') {
            alert("Persons residing here: " + residentList);
            return;
        }
        return residentsInBuilding;
    };
};
//Handle submit functions:
function handleSubmitA(event) {
    event.preventDefault();
    var residentName = event.target[0].value;
    var newResident = new Resident(residentName);
    residentListA.addResident(newResident);
    event.target.reset();
    alert("Hello, " + residentName + ". You are resident number " + residentListA.residentList.length);
}
function handleSubmitB(event) {
    event.preventDefault();
    var residentName = event.target[0].value;
    var newResident = new Resident(residentName);
    residentListB.addResident(newResident);
    event.target.reset();
    alert("Hello, " + residentName + ". You are resident number " + residentListB.residentList.length);
}
