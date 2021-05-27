"use strict";

var name = "Jonathan"; //

function myName(name) {
  return "My name is " + name;
}

console.log(myName(name)); //

var mySecondName = function mySecondName(name) {
  return "My name is " + name;
};

x = mySecondName(name);
console.log(x); //

var myThirdName = function myThirdName(name) {
  return "My name is " + name;
};

x = myThirdName(name);
console.log(x);

function Factorial(number) {
  var result = 1;

  for (var i = 0; i < number; i++) {
    result = result * (i + 1);
  }

  return result;
}

console.log(Factorial(3));
/*
function Factoriala(number){

    if (number === 0 || number === 1)
    return 1;

    for(let i=number-1;i >= 1;i--){
        number = number * i;
    }
    return number;
}

console.log(Factoriala(4))
*/