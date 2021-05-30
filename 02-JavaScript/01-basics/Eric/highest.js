
//1) create a function with error handeling, for: get an array, and return the heighst number. make sure you handle all errors
//2) create the function in the three ways (simple, anonymous, arrow);

//common function
let maxnumberinarray = ['hola', 1, 3, 6, 9];

function highest(array5){

   try{
    
       if(!Array.isArray(array5)) throw new Error('is not an object')
       for (let el in array5){
           if (typeof el !== "number"){
               throw new Error("Some elements is not a number")
           }
       }
       return Math.max.apply(null,array5);
   }
catch (error){
   console.log(error);
   return 0;
}}
console.log(highest(maxnumberinarray));

//annonymous function
const max = function (array2){
   try{
       if(!Array.isArray(array2)) throw new Error('is not an object')
       for (let el in array2){
           if (typeof el !== "number"){
               throw new Error("Some elements is not a number")
           }
       }
       return Math.max.apply(null,array2);
   }
catch (error){
   console.log(error);
   return 0
}
}
console.log(max(maxnumberinarray));


//arrow function
const maxx = (numbers) =>{
   try{
       if(!Array.isArray(numbers)) throw new Error('is not an object')
       for (let el in numbers){
           if (typeof el !== "number"){
               throw new Error("Some elements is not a number")
           }
       }
       return Math.max.apply(null,numbers);
   }
catch (error){
   console.log(error);
   return 0;
}
}
console.log(maxx(maxnumberinarray));


// Very nice!! 
