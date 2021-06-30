var _a;
var person = {
    name2: "Dan",
    street: "Herzel"
};
var name2 = person.name2, street = person.street;
console.log("name:", name2);
console.log("street", street);
var _b = "John S".split(' '), fi = _b[0], se = _b[1];
var x, y;
_a = [10, 20], x = _a[0], y = _a[1];
console.log(x + y);
//https://dmitripavlutin.com/javascript-object-destructuring/
//https://javascript.info/destructuring-assignment
var volume = {
    height: 1,
    width: 2,
    depth: 3
};
var height = volume.height, width = volume.width, depth = volume.depth;
function calculateVolume(_a) {
    var height = _a.height, width = _a.width, depth = _a.depth;
    var volume = height * width * depth;
    return volume;
}
var BoardVolumeRoot = document.querySelector('#boardVolume');
var html = "";
html += "<div>The volume of the cubick area is: " + calculateVolume({ height: height, width: width, depth: depth }) + "</div>";
BoardVolumeRoot.innerHTML = html;
