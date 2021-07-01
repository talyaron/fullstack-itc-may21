const arr1:Array<number> = [1,2,3,4,77];

const arr2:Array<number> =[100,...arr1, 5];
console.log(arr2)

arr1[0] = 2000;
console.log(arr2);

const arr3:Array<number> = arr1;

console.log(arr3)

arr1[0] = 345;

console.log(arr3); // arr3[0] -> 2000

let x = 345
let y = x //345

console.log(y) //345
x = 12
console.log(y) //12
