var submitA = document.querySelector("#submitA");
var submitB = document.querySelector("#submitB");
submitA.addEventListener("click", getInputValueA);
submitB.addEventListener("click", getInputValueB);
function getInputValueA(ev) {
    ev.preventDefault();
    var nameA = document.querySelector("#nameA").value;
    console.log(buildingOne(nameA));
}
function getInputValueB(ev) {
    ev.preventDefault();
    var nameB = document.querySelector("#nameB").value;
    console.log(buildingTwo(nameB));
}
function outsideFunction(building) {
    var residentNumber = 0;
    var residentsArray = [];
    function insideFunction(residentName) {
        residentNumber++;
        if (residentName === "l") {
            return residentsArray;
        }
        residentsArray.push(residentName);
        if (residentsArray.length > 1) {
            var lastIndex = residentsArray.length - 1;
            residentsArray[lastIndex] = " and " + residentsArray[lastIndex];
        }
        return "Hello, " + residentName + ", you are resident number " + residentNumber + " of " + building + " and the residents of your building are " + residentsArray + ".";
    }
    return insideFunction;
}
var buildingOne = outsideFunction("building one");
var buildingTwo = outsideFunction("building two");
