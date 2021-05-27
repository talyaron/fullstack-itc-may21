
let name = "Jonathan"

//
function myName(name){
    return "My name is " + name;
}

console.log(myName(name))

//
let mySecondName = function (name){
    return "My name is " + name;
}

x = mySecondName(name);
console.log(x);

//

let myThirdName = (name) =>{
    return "My name is " + name;
}

x = myThirdName(name);
console.log(x);





function Factorial(number){
    let result=1;
    
    for (let i=0; i<number; i++){
        result = result * (i+1);
    }
    return result;
}

console.log(Factorial(3))





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