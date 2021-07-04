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
var sizes = { height: 2, width: 43, depth: 2 };
function cubicVolume(_a) {
    var height = _a.height, width = _a.width, depth = _a.depth;
    var x = height * width * depth;
    return x;
}
console.log(cubicVolume({ height: 2, width: 2, depth: 2 }));
console.log(cubicVolume({ height: 6, width: 2, depth: 9 }));
console.log(cubicVolume(sizes));
