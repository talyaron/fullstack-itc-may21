// create a function in typescript that gets the sallery as an anual sallery (number), and return a string saying "your avarage monthly sallery is:x";
// export {}
function monthlySallery(anualSallery) {
    var monthly = anualSallery / 12;
    return monthly;
}
var yearly = 12000;
console.log("Your monthly sallery is " + monthlySallery(yearly));
