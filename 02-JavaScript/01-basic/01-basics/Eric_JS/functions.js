
//1

function Hello(name) {
    return 'hello ' + name;
}

const Name = 'Eric';

console.log(Hello(Name));


let hi = function (name) {
    return 'hello ' + name;
}

const othername = 'Ericc';

console.log(hi(othername));


let xx = (firstName)=>{
    return 'hello ' + firstName;
}

const othernames = 'Ericcc';

console.log(xx(othernames));


//3
var x = 7
var result = x;
for(var i=x-1; i>=1; i--){
    result = result*i
}
console.log(result);



//1) create a function with error handeling, for: get an array, and return the heighst number. make sure you handle all errors
//2) create the function in the three ways (simple, anonymous, arrow);





let highestArray = ["pepe",12,100,2]


//First Method

function numberHighest(array2){

    try{

        for (let i=0; i<array2.length; i++){
            if (typeof array2[i] !== "number"){
                throw new Error("Some elements is not a number")
            }
        }

        return Math.max.apply(null,array2)
    }
    catch (error){
        console.log(error);
        return 0
    }
    
}

console.log(numberHighest(highestArray))

//Second Method

let secondMethod = function(array2){

    try{

        for (let i=0; i<array2.length; i++){
            if (typeof array2[i] !== "number"){
                throw new Error("Some elements is not a number")
            }
        }

        return Math.max.apply(null,array2)
    }
    catch (error){
        console.log(error);
        return 0
    }

}

x = secondMethod(highestArray);
console.log(x);

//Third Method

let thirdMethod = (array2)=>{

    try{

        for (let i=0; i<array2.length; i++){
            if (typeof array2[i] !== "number"){
                throw new Error("Some elements is not a number")
            }
        }

        return Math.max.apply(null,array2)
    }
    catch (error){
        console.log(error);
        return 0
    }

}

y = thirdMethod(highestArray);
console.log(y);
