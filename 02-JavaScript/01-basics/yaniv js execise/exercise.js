// 1) write a function that takes your name, and returns "hello <name>";
// 2) write it in the three forms of functions
// 3) write n! function (https://www.britannica.com/science/factorial);

// 1) + 2)

function sayHello(name) {
    return 'Hello ' + name + '! This is a classic function';
}

const myName1 = 'Yaniv';

console.log(sayHello(myName1));


let sayHey = function (name) {
    return 'Hello ' + name + '! This is a anonymous function';
}

const myName2 = 'Yanivvv';

console.log(sayHey(myName2));


let greet = (firstName)=>{
    return 'Hello ' + firstName + '! This is an arrow function';
}

const myName3 = 'Yaniiiiiv';

console.log(greet(myName3));

// 3)

function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        console.log('Step ' + (i - 1) + ': ' + result + ' x ' + i + ' = ' + result*i);
        result *= i;
    }

    return 'Final result: The factorial of ' + num + ' is ' + result + '!';
}

const toFactorial = 8;

console.log(factorial(toFactorial));