//DECONSTRUCT
const person = {
    sirName: "Russell",
    city:"Chicago"
}

const { sirName, city} = person
console.log(sirName, city);
//According to key in object

const objects = [{name:"same", age: 18},{name:"joe",age: 19}]

const [firstPerson, secondPerson ] = objects
console.log(firstPerson, secondPerson);

//Array it's according to order
const obj= [ 'a','b', 'c']

const [firstOne, secondOne, third, fourth ] = obj;
console.log(firstOne, secondOne);



