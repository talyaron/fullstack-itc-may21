/* 1) create a closure function.
the function will get the name of the resident

welcome('Efraim')
-> Hello Efraim, You are resident number 1

the function will return "Hello <Name>, you are resident number X", and it will count the number of residents

2) create a function that will hold all the name of the residents in its closure.
if the input arguement is 'l' return an array with all the residents
welcome('l')...

3) create it for building A, and for building B; */
//With this function I handle the form:
var handleSubmitBuildingA = function (ev) {
    ev.preventDefault();
    try {
        var person = ev.target.elements.person.value;
        if (!person)
            throw new Error('The person it doesn´t exist!');
        buildingB(person);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
};
var handleSubmitBuildingB = function (ev) {
    ev.preventDefault();
    try {
        var person = ev.target.elements.person.value;
        if (!person)
            throw new Error('The person it doesn´t exist!');
        buildingA(person);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
};
//With this I will call the global function
var buildingA = residentsLiving();
var buildingB = residentsLiving();
function residentsLiving() {
    try {
        //Create an empty array of residents
        var residents_1 = [];
        //This function inside the global function is going to push a person to the array and to print a message
        function residentPerBuilding(person) {
            try {
                if (person === 'l') {
                    alert("The residents of this building are: " + residents_1);
                    return;
                }
                residents_1.push(person);
                alert("Welcome " + person + ", you are the resident number " + residents_1.length);
            }
            catch (error) {
                console.error(error);
            }
            ;
        }
        ;
        return residentPerBuilding;
    }
    catch (error) {
        console.error(error);
    }
}
;
