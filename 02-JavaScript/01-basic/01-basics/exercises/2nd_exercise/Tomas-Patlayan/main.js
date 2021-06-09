
//ARROW

array1 = [1, 2, 9, 18, 20];

const foundMedia = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  lengthArray = (array.length - 1) /2;
  res = array[lengthArray];
  return res;
}

console.log(foundMedia(array1));


//SIMPLE

function foundMedia2(array)  {
  array.sort(function (a, b) {
    return a - b;
  });
  lengthArray = (array.length - 1) /2;
  res = array[lengthArray];
  return res;
}

console.log(foundMedia2(array1));


//ANONYMOUS


let  foundMedia3 = function(array)  {
  array.sort(function (a, b) {
    return a - b;
  });
  lengthArray = (array.length - 1) /2;
  res = array[lengthArray];
  return res;
}

console.log(foundMedia3(array1));




const student = {
  name: 'Tomas',
  lastName:'Patlayan',
  age: 19
}


//ARROW
const toArray = (student) => {
arr= Object.values(student);
return arr;
} 

console.log(toArray(student));


//SIMPLE
function toArray2(student) {
  arr= Object.values(student);
  return arr;
  } 
  console.log(toArray2(student));


//ANONYMOUS
   let toArray3 = function (student) {
    arr= Object.values(student);
    return arr;
    } 
    console.log(toArray3(student));