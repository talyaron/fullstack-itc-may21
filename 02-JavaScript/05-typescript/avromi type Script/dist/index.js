var x = 22;
// create a function in typescript that gets the sallery 
// as an anual sallery (number), and return a string saying
//  "your avarage monthly sallery is:x";
function getSalary(a) {
    var x = a / 12;
    return "your avarage monthly salary is " + x;
}
console.log(getSalary(12000));
