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
console.log(addResBldg1("sam"));
console.log(addResBldg1("mitch"));
console.log(addResBldg1("abe"));
console.log(addResBldg2("mike"));
console.log(addResBldg2("jim"));
console.log(addResBldg2("steve"));

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
console.log(someClosure("somethingElse"));
console.log(someClosure("somethingElseHere"));
console.log(someClosure2("somethin"));
