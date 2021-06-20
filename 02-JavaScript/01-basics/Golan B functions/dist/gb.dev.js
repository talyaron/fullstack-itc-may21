"use strict";

//pure function declaration
function pureName(sentence, myName) {
  return sentence + " " + myName; //YS: Try to use template literals, also you dont need a parenthesis if the return statement is in the same line: return `${sentence}  ${myName}`
} //variables


var theName = "Golan Blumenkrantz";
var theSentence = "Hello"; //print

console.log(pureName(theSentence, theName));
alert(pureName(theSentence, theName)); // anonymous function declaration

var anonName = function anonName(sentence2, myName2) {
  //YS: Use const instead of let. 
  return sentence2 + " " + myName2; //YS: No parenthesis
}; //variables


var theName2 = "Golan Blumenkrantz"; //YS: Use let instead of const so that you can use the same variable (theName / theSentence) and just change the value. 
//Ex:  let theName = "Golan"
//   theName = "Yonatan"
//   theName = "Fred"

var theSentence2 = "Hello"; //print

console.log(anonName(theSentence2, theName2));
alert(anonName(theSentence2, theName2)); //arrow function declaration

var arrowName = function arrowName(sentence3, myName3) {
  //YS: Use const
  return sentence3 + " " + myName3; //YS: No parenthesis needed
}; //variables


var theName3 = "Golan Blumenkrantz";
var theSentence3 = "Hello"; //print

console.log(arrowName(theSentence3, theName3));
alert(arrowName(theSentence3, theName3)); // factorial function 

var factorialOf = function factorialOf(number) {
  //YS: Good use of const for function
  var factorial = 1; //for loop

  for (var i = 1; i <= number; i++) {
    //YS: Nice! 
    factorial *= i;
  }

  return factorial;
}; //print


console.log(factorialOf(1));
console.log(factorialOf(2));
console.log(factorialOf(3));
console.log(factorialOf(4));
console.log(factorialOf(5));
console.log(factorialOf(6));
console.log(factorialOf(7));