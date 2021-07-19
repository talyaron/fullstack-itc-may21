var nameA = document.querySelector("#nameA");
var nameB = document.querySelector("#nameB");
var submitA = document.querySelector("#submitA");
var submitB = document.querySelector("#submitB");
submitA.addEventListener("click", handleSubmitA);
submitB.addEventListener("click", handleSubmitB);
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
// const list = outsideFunction("building one");
// const list2 = outsideFunction("building two");
var buildingOne = outsideFunction("building one");
var buildingTwo = outsideFunction("building two");
// submitA.addEventListener("submit", buildingOne);
// submitA.addEventListener("submit", buildingTwo);
// console.log(buildingOne(`${residentName.value}`));
// console.log(buildingOne(`${nameB.value}`));
function handleSubmitA(ev) {
    console.log(nameA.value);
}
function handleSubmitB(ev) {
    var nameB = ev.target.elements.nameB.value;
    console.log(buildingOne(nameB.va));
    ev.target.reset();
}
// Two small forms. First I have to call outsideFUnction (on the click) with the input that you get for building (either one or two)
// AND THEN you have to do the same as this, below, but instead of the names, hardcoded, you wilp have input.value.
// The form to take in the names and the answers in the DOM
// on submit call "building One"
// console.log(buildingOne("Julie"));
// console.log(buildingOne("Sam"));
// console.log(buildingOne("Yonatan"));
// console.log(buildingTwo("Tal"));
// console.log(buildingTwo("Joe"));
// console.log(buildingTwo("Zi"));
// list("Yaniv");
// list("Harry");
// console.log(list("l"));
