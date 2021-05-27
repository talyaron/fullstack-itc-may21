// 1) write a function that takes your name, and returns "hello <name>";
// 2) write it in the three forms of functions
// 3) write n! function (https://www.britannica.com/science/factorial);

// 1) + 2)

function sayHello(name) {
    return 'hello ' + name + '!';
}

const myName1 = 'Yaniv';

console.log(sayHello(myName1));


let sayHey = function (name) {
    return 'hello ' + name + '!';
}

const myName2 = 'Yanivvv';

console.log(sayHey(myName2));


let greet = (firstName)=>{
    return 'hello ' + firstName;
}

const myName3 = 'Yaniiiiiv';

console.log(greet(myName3));

// 3)

function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

const toFactorial = 8;

console.log('the factorial of ' + toFactorial + ' is ' + factorial(toFactorial) + '!');