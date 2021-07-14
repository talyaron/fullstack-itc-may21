
function welcome() {
    let residents: Array<string> = [];
    function personalWelcome(resident: string) {       
        residents.push(resident);
        return `Welcome ${resident}, you are resident number ${residents.length}`;
    }
    return personalWelcome
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
