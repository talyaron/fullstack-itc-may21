//DECONSTRUCT
var person = {
    sirName: "Russell",
    city: "Chicago"
};
var sirName = person.sirName, city = person.city;
console.log(sirName, city);
//According to key in object
var objects = [{ name: "same", age: 18 }, { name: "joe", age: 19 }];
var firstPerson = objects[0], secondPerson = objects[1];
console.log(firstPerson, secondPerson);
//Array it's according to order
var obj = ['a', 'b', 'c'];
var firstOne = obj[0], secondOne = obj[1], third = obj[2], fourth = obj[3];
console.log(firstOne, secondOne);
