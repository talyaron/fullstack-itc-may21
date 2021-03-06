
// Point 1
let name = "Jonathan"


function firstMethod(name){
    return "My name is " + name;   //YS: Try to use template literals instead: `My name is ${name}`
}

console.log(firstMethod(name))


//Point 2. First method above.

let secondMethod = function (name){
    return "My name is " + name;
}

let x = secondMethod(name);
console.log(x);

//

let thirdMethod = (name) =>{  //YS: Use const for functions. 
    return "My name is " + name;
}

let y = thirdMethod(name);
console.log(y);



// Point 3 -- three method's

const number = 3;

function Factorial(number){   //YS: The function name should not start with a capital. 
    let result = 1;
    
    for (let i = 1; i<number; i++){
        result *= (i + 1);
    }
    return result;
}

console.log("The factorial of " + number + " is " + Factorial(number))



function Factorial2(number){

    let r = number;

    if (number === 0){
        return 1
    }
    for (let i=1; i<number;i++){
        r *= number - i
    }
    return r;
}

console.log("The factorial of " + number + " is " + Factorial2(number))


function Factorial3(number){
    if (number === 0){
        return 1
    }
    return number * Factorial3(number - 1)    
}

console.log("The factorial of " + number + " is " + Factorial3(number))



