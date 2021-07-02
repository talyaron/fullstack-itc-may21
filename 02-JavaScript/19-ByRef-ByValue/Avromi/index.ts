let x = 1;
const y = x;
console.log(y);

x=5
console.log(y);

const myArray = [1,2,3,2,1]
const newArray = myArray 

myArray[2]=5 //0,1,[2],3
console.log(newArray);

const somePeople = [{name:"sam"},{name:"bill"},{name:"mark"},{name:"joe"}]
const otherPeople = somePeople 

somePeople[0].name= "mike"
console.log(otherPeople);
otherPeople[1].name = "New Name";
console.log(somePeople);

