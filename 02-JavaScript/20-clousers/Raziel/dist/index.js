// 1) create a closure function.
// the function will get the name of the resident
// welcome('Efraim')
// -> Hello Efraim, You are resident number 1
// the function will return "Hello <Name>, you are resident number X", and it will count the number of residents
// 2) create a function that will hold all the name of the residents in its closure.
// if the input arguement is 'l' return an array with all the residents
// welcome('l')...
// 3) create it for bulding A, and for bulding B;
function welcome() {
    try {
        var residents_1 = [];
        function personalWelcome(resident) {
            try {
                if (resident === "l")
                    return residents_1;
                residents_1.push(resident);
                return "Welcome " + resident + ", you are resident number " + residents_1.length;
            }
            catch (error) {
                console.error(error);
            }
        }
        return personalWelcome;
    }
    catch (error) {
        console.error(error);
    }
}
var buildingA = welcome();
var buildingB = welcome();
function handleA(ev) {
    try {
        ev.preventDefault();
        var resident = ev.target.elements.resident.value;
        console.log(buildingA(resident));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleB(ev) {
    try {
        ev.preventDefault();
        var resident = ev.target.elements.resident.value;
        console.log(buildingA(resident));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
