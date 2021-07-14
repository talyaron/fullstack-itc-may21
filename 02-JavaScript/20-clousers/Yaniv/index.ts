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
    let residents: Array<string> = [];
    function personalWelcome(resident: string) {
        if (resident === 'l') return residents;
        residents.push(resident);
        return `Welcome ${resident}, you are resident number ${residents.length}`;
    }
    return personalWelcome
}


const buildingA = welcome();
const buildingB = welcome();
console.log(buildingA('Eric'));
console.log(buildingA('Jonathan'));
console.log(buildingA('Leonardo'));
console.log(buildingA('Tomas'));
console.log(buildingA('l'));

console.log(buildingB('Raziel'));
console.log(buildingB('Yarden'));
console.log(buildingB('Avromi'));
console.log(buildingB('Julie'));
console.log(buildingB('Efraim'));
console.log(buildingB('Yaniv'));
console.log(buildingB('l'));
