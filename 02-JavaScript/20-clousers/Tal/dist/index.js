function add(z) {
    var b = 55;
    function _add(x) {
        debugger;
        z++;
        return x + z;
    }
    return _add;
}
var addZ = add(10);
var addX = add(5);
console.log(addZ(2));
console.log(addZ(20));
console.log(addZ(2));
console.log(addZ(20));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
