var city = {
    name2: 'Holon',
    population: "165000",
    age: "70",
    streets: ["eilat", "sokolov", "reafel eitan"]
};
var name2 = city.name2, age = city.age;
console.log(name2, age);
var streets = city.streets;
console.log(streets);
var cube = { width: 100, height: 200, depth: 900 };
function volume(_a) {
    var width = _a.width, height = _a.height, depth = _a.depth;
    return console.log(width * height * depth);
}
volume({ width: 200, height: 200, depth: 100 });
volume(cube);
