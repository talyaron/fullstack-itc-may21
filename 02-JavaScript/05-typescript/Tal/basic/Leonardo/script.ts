/* create a function in typescript that gets the sallery as an anual sallery (number), and return a string saying "your avarage monthly sallery is:x"; */

let anualSalary: number = 1000;

function saySalary():string {
    return `Your annual salary will be ${anualSalary/12}`
}

console.log(saySalary());


