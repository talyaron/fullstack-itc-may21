let name = "Tomas";
const nombre = () => {
  console.log("Hello " + name);
};

function nombre2() {
  console.log("Hello " + name);
}

let nombre3 = function () {
  console.log("Hello " + name);
};

let number = 7;

function Factorial3(number) {
  if (number === 0) {
    return 1;
  }
  return number * Factorial3(number - 1);
  // YS: Mind the gaps!
    
    console.log('Hello '+name);
}

function nombre2(){
   

    console.log('Hello '+ name);
}


let nombre3 = function(){  //YS: Use const for functions 
   
console.log('Hello ' + name);
}

let number = 7;


function Factorial3(number){     //YS: This is good, another way could be by using a loop. 
    if (number === 0){
        return 1
    }
    return number * Factorial3(number - 1)    

}

nombre();
nombre2();
nombre3();

console.log("The factorial of " + number + " is " + Factorial3(number));
