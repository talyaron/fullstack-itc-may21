//1) create a function for finding the Median in an array. (https://www.mathsisfun.com/median.html)
//2) create a function that take an object and return an array with the values of the object in an array.

//generate them in the three ways (simple, anonymous, arrow)

//1-1st method

let arr=[1,1,2,2,,14,13,14,190,22,222,222,222,222,222,222,222,222,22,9,5,6,1,3,8,7];


let arrSort = arr.sort((a, b) => {
    return a - b; //sort an array, this function help to fixe a ASCII code, else some arrays could not sorted
});
  
let middle = Math.ceil(arr.length / 2); //returns the closest greater or equal integer to a given number.
    console.log(arrSort);
function median(arrSort){    
    //% return residual of the division
    if ((arr.length % 2) == 0){
        return (arrSort[middle] + arrSort[middle-1])/2;    //take extremes middle numbers and do an average because is inpar
    } else{
        return arrSort[middle-1]; //par array
    }
}
console.log("median: ", median(arrSort));

//determines if the passed value is an Array.



//1-2nd method

const secondmedian = (arrSort) => {
if((arr.length % 2) == 0){
    return (arrSort[middle] + arrSort[middle-1])/2;
}else{
    return arrSort[middle-1]; 
}
}
console.log("median: ", secondmedian(arrSort));


//1-3th method
const thirdmedian = function(arrSort){
    if((arr.length % 2) == 0){
        return (arrSort[middle] + arrSort[middle-1])/2;
    }else{
        return arrSort[middle-1]; 
    }
    }
    console.log("median: ", thirdmedian(arrSort));
    

//2-1st method
//2) create a function that take an object and return an array with the values of the object in an array.

let object = {
    a: 'Eric',
    b: 42,
    c: false
  };
  let arraynew =[1,2,3];

function values(object){
    arraynew.push(Object.values(object))
return arraynew;
}
console.log(values(object));