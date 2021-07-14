

function add(z) {
    let b = 55;
    function _add(x: number) {
        debugger;
        
        z++;
        return x + z;
    }
    return _add
}


const addZ = add(10);
const addX = add(5);
console.log(addZ(2));
console.log(addZ(20));
console.log(addZ(2));
console.log(addZ(20));

console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
console.log(addX(1));
