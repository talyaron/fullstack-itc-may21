
// Point 1
let name = "Jonathan"


function firstMethod(name){
    return "My name is " + name;
}

console.log(firstMethod(name))


//Point 2. First method above.

let secondMethod = function (name){
    return "My name is " + name;
}

x = secondMethod(name);
console.log(x);

//

let thirdMethod = (name) =>{
    return "My name is " + name;
}

x = thirdMethod(name);
console.log(x);



// Point 3 -- three method's

const number = 3;

function Factorial(number){
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



