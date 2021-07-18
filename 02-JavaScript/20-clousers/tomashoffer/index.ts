// 1) create a closure function.
// the function will get the name of the resident

// welcome('Efraim')
// -> Hello Efraim, You are resident number 1

// the function will return "Hello <Name>, you are resident number X", and it will count the number of residents

// 2) create a function that will hold all the name of the residents in its closure.
// if the input arguement is 'l' return an array with all the residents
// welcome('l')...

// 3) create it for building A, and for building B;


const residents = [];
const allResidents = resident();
const residentsA = resident();
const residentsB = resident();

function resident() {
    let counter = 0;
    let arrayName:Array<string> = [];
    function welcome(name: string): Array<string> | string {
        arrayName.push(name);
        let nombreResidente = name;
        counter++;
        if(name === "l") console.log(arrayName);
        return 'Hello ' + nombreResidente + ', you are resident number ' + counter
    }
    return welcome;
}

const newResident = resident();
console.log(newResident("Tomas"));
console.log(newResident('Matias'));


function handleResidentsA(ev: any): void {
    try {
        ev.preventDefault();
        const resident: string = ev.target.elements.residentes.value;
        console.log(residentsA(resident));
    } catch (error) {
        console.error(error);
    }
}

function handleResidentsB(ev: any): void {
    try {
        ev.preventDefault();
        const resident: string = ev.target.elements.residentes.value;
        console.log(residentsB(resident));
        
    } catch (error) {
        console.error(error);
    }
}





















const arrayResidents = [];

function residentHold() {
    let counter = 0;
    function welcomeResident(name) {
        arrayResidents.push(name);
        arrayResidents.map(resident => {
            return `Hello ${resident.name}, you are resident number ` + counter
        })
    }
    return welcomeResident;
}

const newResidentHold = residentHold();
newResidentHold('Shiran');
newResidentHold('Julie');
newResidentHold('Ariana');
console.log(residentHold());
