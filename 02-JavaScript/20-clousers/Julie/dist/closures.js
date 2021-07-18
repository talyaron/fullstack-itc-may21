// 1) create a closure function.
// the function will get the name of the resident
// welcome('Efraim')
// -> Hello Efraim, You are resident number 1
// the function will return "Hello <Name>, you are resident number X", and it will count the number of residents
// 2) create a function that will hold all the name of the residents in its closure.
// if the input arguement is 'l' return an array with all the residents
// welcome('l')...
// 3) create it for building A, and for building B;
function outsideFunction(x) {
    var number = 0;
    var residentsArray = [];
    function insideFunction(resident) {
        // The resident comes from the inside function
        number++;
        residentsArray.push(resident);
        console.log(residentsArray);
        return "Hello, " + resident + ", you are resident number " + b + " of " + x;
        // return "hello resident"
    }
    return insideFunction;
}
// const addZ = outsideFunction(10);
var buildingOne = outsideFunction("building one");
var buildingTwo = outsideFunction("building two");
console.log(buildingOne("Julie"));
console.log(buildingOne("Sam"));
console.log(buildingTwo("Tal"));
console.log(buildingTwo("Joe"));
var addX = outsideFunction(5);
console.log(addZ(2));
console.log(addZ(20));
console.log(addZ(2));
console.log(addZ(20));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
// Assign an array for the second part
