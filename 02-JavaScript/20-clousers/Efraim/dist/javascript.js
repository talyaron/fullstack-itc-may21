function addResident(residentNumber) {
    var residentArray = [];
    function _addResident(residentName) {
        debugger;
        if (residentName === 'l') {
            return "Here Are a List of Current Residents: " + residentArray;
        }
        else if (residentName === '') {
            throw new Error("No Name Entered");
        }
        else {
            residentArray.push(" " + residentName);
            residentNumber++;
            return "Hello " + residentName + ", you are resident number " + residentNumber;
        }
    }
    return _addResident;
}
var buildingA = addResident(0);
function handleResidentBA(ev) {
    try {
        ev.preventDefault();
        var resident = ev.target.children.resident.value;
        var buildingADisplay = document.querySelector(".buildingA");
        buildingADisplay.innerHTML = buildingA(resident);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
var buildingAForm = document.querySelector("#building-A");
buildingAForm.addEventListener("submit", handleResidentBA);
var buildingB = addResident(0);
function handleResidentBB(ev) {
    try {
        ev.preventDefault();
        var resident = ev.target.children.resident.value;
        var buildingBDisplay = document.querySelector(".buildingB");
        buildingBDisplay.innerHTML = buildingB(resident);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
var buildingBForm = document.querySelector("#building-B");
buildingBForm.addEventListener("submit", handleResidentBB);
