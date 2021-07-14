function welcome() {
    var residents = [];
    function personalWelcome(resident) {
        residents.push(resident);
        return "Welcome " + resident + ", you are resident number " + residents.length;
    }
    return personalWelcome;
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
