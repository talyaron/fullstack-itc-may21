// 1) write a function that takes your name, and returns "hello <name>";
// 2) write it in the three forms of functions
// 3) write n! function (https://www.britannica.com/science/factorial);


// 1 and 2

//annonymous function

const Name = 'Eric';          //YS: Variables are usually lower-case: name
const sentence = function (name){
    return 'Hello ' + name          //YS: Try to use template literals instead: `Hello ${name}`
}
console.log(sentence(Name));

//common function

const names = 'Ericc';   //YS: If you will use the same variable, use let instead of const, so you dont have to change the Name --> names --> namees  
function sentences (names){
    return 'Hello ' + names;
}
console.log(sentences(names));

//arrow function

const namees = 'Erickobrinsky';
const othername = (name1) =>{  
    return 'Hello ' + name1;
}
console.log(othername(namees));


//3

function factorial(n){
    if(n === 0 || n === 1){
        return 1 ;
    } else{
         return n * factorial(n-1);
    }
}
const n=7
console.log(factorial(n));

//average
const arr = [3, 7, 2, 6, 5, 4, 9];
const sum = arr.reduce((sum, val) => (sum += val));
const len = arr.length;

console.log("average: ", sum / len);












