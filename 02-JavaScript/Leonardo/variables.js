//Answers to exercise 1 and 2:

const namePureFunction = document.getElementById("typeNamePure");
const nameArrowFunction = document.getElementById("typeNameArrow");
const nameAnonymusFunction = document.getElementById("typeNameAnonymus");
let userName = prompt("Please enter your name...");

const factorialFunction = document.getElementById("typeFactorial");
//------------------- pure function-----------------------------------//
function userNamePure(user){
    return user;
}

let a = userNamePure(userName);
console.log(`Hello ${a} (pure function)`);

namePureFunction.addEventListener("click", function pureName(){
    let textToAdd = document.createElement('marquee');
    textToAdd.innerHTML = `Welcome to my website ${userName}, we are using a Pure Function`;
    textToAdd.style.color = "Red";
    textToAdd.style.fontSize = "48px";
    document.body.appendChild(textToAdd);
});

//------------------- arrow function-----------------------------------//
let userNameArrow = (user) => {
    return user;
}

let b = userNameArrow(userName);
console.log(`Hello ${b} (arrow function)`);

nameArrowFunction.addEventListener("click", () => {
    let textToAdd = document.createElement('marquee');
    textToAdd.innerHTML = `Welcome to my website ${userName}, we are using an Arrow Function`;
    textToAdd.style.color = "Blue";
    textToAdd.style.fontSize = "48px";
    document.body.appendChild(textToAdd);
});
//--------------------anonymus function----------------------------------//
let userNameAnonymus = function(user){
    return user;
}

let c = userNameAnonymus(userName);
console.log(`Hello ${userName} (anonymus function)`);


nameAnonymusFunction.addEventListener("click", function(){
    let textToAdd = document.createElement('marquee');
    textToAdd.innerHTML = `Welcome to my website ${userName}, we are using an Anonymus Function`;
    textToAdd.style.color = "Green";
    textToAdd.style.fontSize = "48px";
    document.body.appendChild(textToAdd);
});

//Answers to exercise 3:
 
factorialFunction.addEventListener("click", () => {
    let number = prompt("Please enter a number to solve the factorial...");
    let textToAdd = document.createElement('h1');    
    let x = factorialize(number);
    textToAdd.innerHTML = `The factorial of ${number} is ${x}`;
    document.body.appendChild(textToAdd);
    console.log(`The factorial of ${number} is ${x}`);
});
 
function factorialize(num) {
    if (num === 0 || num === 1){
      return 1
    } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
}