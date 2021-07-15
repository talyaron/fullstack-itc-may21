
function add(resident) {
    let residentNumber = 0;
    function _add(name: string) {

        residentNumber++;
        return `hello resdient ${name}, you are resident number ${residentNumber}`
    }
    return _add
}


const addResBldg1 = add("Building1");
const addResBldg2 = add("building2");
// console.log(addResBldg1("sam"));
// console.log(addResBldg1("mitch"));
// console.log(addResBldg1("abe"));
// console.log(addResBldg2("mike"));
// console.log(addResBldg2("jim"));
// console.log(addResBldg2("steve"));

// const addX = add(5);

function someFnc(a) {
    let something = "something";
    function _insideSomeFnc(b) {
        return something = b
    }
    return _insideSomeFnc

}

const someClosure = someFnc("hey")
const someClosure2 = someFnc("hey")
// console.log(someClosure("somethingElse"));
// console.log(someClosure("somethingElseHere"));
// console.log(someClosure2("somethin"));


function addArrayOfResidemt() {

    let residentNumber = 0;
    let residentsArray = [];
    console.log(residentsArray);
    function _add(name: string) {

        if (name === "l") {
            residentsArray.map(res => { console.log(`hello resdient ${res.name}, you are resident number ${res.residentNumber}`); })

        }
        if (name !== "l") {
            residentNumber++;
            residentsArray.push({ name, residentNumber })
            return `hello resdient ${name}, you are resident number ${residentNumber}`
        }
    }
    return _add
}


const addResToArray1 = addArrayOfResidemt()
const addResToArray2 = addArrayOfResidemt()
console.log(addResToArray1("AVROMI"));
console.log(addResToArray1("SARAH"));
console.log(addResToArray1("AMICHAI"));
addResToArray1("l");

console.log(addResToArray2("Mike"));
console.log(addResToArray2("David"));
console.log(addResToArray2("Jim"));
addResToArray2("l");


