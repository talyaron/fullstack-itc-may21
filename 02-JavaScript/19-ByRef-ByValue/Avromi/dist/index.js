var x = 1;
var y = x;
console.log(y);
x = 5;
console.log(y);
var myArray = [1, 2, 3, 2, 1];
var newArray = myArray;
myArray[2] = 5; //0,1,[2],3
console.log(newArray);
var somePeople = [{ name: "sam" }, { name: "bill" }, { name: "mark" }, { name: "joe" }];
var otherPeople = somePeople;
somePeople[0].name = "mike";
console.log(otherPeople);
otherPeople[1].name = "New Name";
console.log(somePeople);
