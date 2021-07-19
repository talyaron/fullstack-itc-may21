// My understanding of the instructions:
// Create a closure function. The function will take in the name of the resident as a parameter in the folllowing way: welcome("Efraim"). In the console, it will output, for example, "Hello Efraim, You are resident number 1." In other words, the function will return "Hello <Name>, you are resident number X", and it will count the number of residents (in the console, it will say, "the total number of residents is y").

// Create a function that will hold the names of all the residents in its closure. If the input argument is 'list' it will return an array with the list of all the residents. welcome('l')...

// 3) create it for building A, and for building B;

// This is me trying to understand closure with the help of Kyle Simpson:
function makeAdder(x) {
  // Parameter x is an inner variable assigned to the outer function
  function add(y) {
    return y + x;
    // This inner function uses x and "has closure" over it
  }
  return add;
}
// When you call the innner add function, it is able to remember the x value that was passed to the outser function.
// So you define a new variable that calls the outer function and gives x a value:

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

// This new variable gets a reference to the inner add function with closure over the x parameter of the outer function. That means that in plusOne, x is assigned to the number 1, and then whatever you pass to plusOne will add 1 to the y parameter. Plusten does the same, but for number 10.

// Testing in the console:

plusOne(12);
// This remembers x as 1. This adds 12 (inner y) to the 1 tht is remembered as x.
plusOne(34);
plusTen(45);
// This remembers x as 10
plusTen(9);

// In other words, to understand how this variabel is operating, you haver to look in the previous code and see that it is a function that remembers a parameter over which it has closure.

// Now for the homework:

function outsideFunction(building: string) {
  let residentNumber = 0;
  let residentsArray: Array<string> = [];
  function insideFunction(residentName: string) {
    // The resident comes from the inside function
    residentNumber++;
    residentsArray.push(residentName);
    return `Hello, ${residentName}, you are resident number ${residentNumber} of ${building} and the residents of your building are ${residentsArray[0]} and ${residentsArray[1]}`;
  }
  return insideFunction;
}

// I'm not sure what he's asking for, whether to do it all in one function so that if you put in "l" it gives you the list of reidents, or if you write a separate function to give you the list. I also want to write an if statement that will fix this issue of putting in the index.

// iei something like: if (residentName === "l") return residentsArray;

// So here, "building" is an inner variable assigned to the outside function. The inside function uses "building" in the construction of the string literal. The inside function has "closure" over "building".

// Create a new vaiable that assigns the relevant paramenter to the oputside function. The innner function will be able to remember the building number that was passed to the outer function.

const buildingOne = outsideFunction("building one");
const buildingTwo = outsideFunction("building two");

console.log(buildingOne("Julie"));
console.log(buildingOne("Sam"));
console.log(buildingTwo("Tal"));
console.log(buildingTwo("Joe"));
