"use strict";

//Answers to exercise 1 and 2:
var namePureFunction = document.getElementById("typeNamePure");
var nameArrowFunction = document.getElementById("typeNameArrow");
var nameAnonymusFunction = document.getElementById("typeNameAnonymus");
var userName = prompt("Please enter your name...");
var factorialFunction = document.getElementById("typeFactorial"); //------------------- pure function-----------------------------------//

function userNamePure(user) {
  return user;
}

var a = userNamePure(userName); //YS: Use const for functions. 

console.log("Hello ".concat(a, " (pure function)"));
namePureFunction.addEventListener("click", function pureName() {
  var textToAdd = document.createElement('marquee');
  textToAdd.innerHTML = "Welcome to my website ".concat(userName, ", we are using a Pure Function");
  textToAdd.style.color = "Red";
  textToAdd.style.fontSize = "48px";
  document.body.appendChild(textToAdd);
}); //------------------- arrow function-----------------------------------//

var userNameArrow = function userNameArrow(user) {
  //YS: Use const for functions 
  return user;
};

var b = userNameArrow(userName);
console.log("Hello ".concat(b, " (arrow function)"));
nameArrowFunction.addEventListener("click", function () {
  var textToAdd = document.createElement('marquee');
  textToAdd.innerHTML = "Welcome to my website ".concat(userName, ", we are using an Arrow Function");
  textToAdd.style.color = "Blue";
  textToAdd.style.fontSize = "48px";
  document.body.appendChild(textToAdd);
}); //--------------------anonymus function----------------------------------//

var userNameAnonymus = function userNameAnonymus(user) {
  return user;
};

var c = userNameAnonymus(userName);
console.log("Hello ".concat(userName, " (anonymus function)"));
nameAnonymusFunction.addEventListener("click", function () {
  var textToAdd = document.createElement('marquee');
  textToAdd.innerHTML = "Welcome to my website ".concat(userName, ", we are using an Anonymus Function");
  textToAdd.style.color = "Green";
  textToAdd.style.fontSize = "48px";
  document.body.appendChild(textToAdd);
}); //Answers to exercise 3:

factorialFunction.addEventListener("click", function () {
  var number = prompt("Please enter a number to solve the factorial...");
  var textToAdd = document.createElement('h1');
  var x = factorialize(number);
  textToAdd.innerHTML = "The factorial of ".concat(number, " is ").concat(x);
  document.body.appendChild(textToAdd);
  console.log("The factorial of ".concat(number, " is ").concat(x));
});

function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }

    return num;
  }
} //YS: Excellent work!