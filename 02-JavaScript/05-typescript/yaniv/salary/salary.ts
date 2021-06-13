// create a function in typescript that gets the sallery as an anual sallery (number), and return a string saying "your avarage monthly sallery is:x";

//  export {}
var monthlySalary = (anualSalary : number) : number => {
    const monthly : number = anualSalary/12;
    return monthly;
}

const yearly = 12000;
console.log(`Your avarage monthly sallery is ${monthlySalary(yearly)}`);