// create a function in typescript that gets the sallery as an anual sallery (number), and return a string saying "your avarage monthly sallery is:x";

// export {}
function monthlySallery(anualSallery : number) : number {
    const monthly : number = anualSallery/12;
    return monthly;
}

const yearly = 12000;
console.log(`Your monthly sallery is ${monthlySallery(yearly)}`);