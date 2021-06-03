
//pure function declaration
function pureName(sentence, myName){
    return(sentence + " " + myName);
    
}
//variables
const theName = "Golan Blumenkrantz";
const theSentence = "Hello";

//print
console.log(pureName(theSentence, theName));
alert(pureName(theSentence, theName));

// anonymous function declaration
let anonName = function(sentence2, myName2){
    return(sentence2 + " " + myName2);
}
//variables
const theName2 = "Golan Blumenkrantz";
const theSentence2 = "Hello";
//print
console.log(anonName(theSentence2, theName2));
alert(anonName(theSentence2, theName2));

//arrow function declaration
let arrowName = (sentence3, myName3) => {
    return(sentence3 + " " + myName3);
}
//variables
const theName3 = "Golan Blumenkrantz";
const theSentence3 = "Hello";
//print
console.log(arrowName(theSentence3, theName3));
alert(arrowName(theSentence3, theName3));

// factorial function 
const factorialOf = number => {
    let factorial = 1;
  //for loop
    for(let i = 1; i <= number; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  //print
console.log(factorialOf(1));  
console.log(factorialOf(2));  
console.log(factorialOf(3));  
console.log(factorialOf(4)); 
console.log(factorialOf(5));  
console.log(factorialOf(6)); 
console.log(factorialOf(7)); 

