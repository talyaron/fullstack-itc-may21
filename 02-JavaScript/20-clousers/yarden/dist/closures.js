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
//Handle submit functions:
var handleSubmitWest = function (event) {
    event.preventDefault();
    var name = event.target[0].value;
    westWingList(name);
    event.target.reset();
};
var handleSubmitEast = function (event) {
    event.preventDefault();
    var name = event.target[0].value;
    eastWingList(name);
    event.target.reset();
};
//The main closure function where the inner func uses a constant from the outer func's scope:
function greet() {
    var residentsList = [];
    //Listing or greeting section:
    function residentCounter(residentName) {
        if (residentName === 'l') {
            alert("Residing in this wing: " + residentsList + ".");
        }
        else {
            residentsList.unshift(residentName);
            alert("Welcome, " + residentName + ". You are resident number " + residentsList.length);
        }
    }
    return residentCounter;
}
//Instances of the closure function for both buildings:
var westWingList = greet();
var eastWingList = greet();
