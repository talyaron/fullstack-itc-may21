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


const sizes = {height: 2, width: 43, depth: 2}

function cubicVolume({height, width, depth}:{height:number, width:number, depth:number}):number{
    const x = height*width*depth
    return x
}

console.log(cubicVolume({height: 2, width:2, depth: 2}));
console.log(cubicVolume({height: 6, width:2, depth: 9}));
console.log(cubicVolume(sizes));




