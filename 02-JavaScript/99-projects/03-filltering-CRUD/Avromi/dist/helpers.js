function addNewOrigin() {
    var selectOrigin = document.querySelector("table #origin");
    var originList = [];
    cars.cars.forEach(function (c) { return originList.push(c.Origin); });
    var mySet = new Set(originList);
    // console.log(mySet);
    selectOrigin.innerHTML = "";
    mySet.forEach(function (o) {
        var option = "<option value=\"" + o + "\">" + o + "</option>";
        selectOrigin.insertAdjacentHTML("afterbegin", option);
    });
}
;
function addNewCylinders() {
    var selectCylinders = document.querySelector("table #cylinders");
    var cylinderList = [];
    cars.cars.forEach(function (c) { return cylinderList.push(c.Cylinders); });
    var myCylinderSet = new Set(cylinderList);
    selectCylinders.innerHTML = "";
    myCylinderSet.forEach(function (c) {
        var option = "<option value=\"" + c + "\">" + c + "</option>";
        selectCylinders.insertAdjacentHTML('afterbegin', option);
    });
}
function addNewMpg() {
    var selectMpg = document.querySelector("table #milesPerGallon");
    var mpgList = [];
    cars.cars.forEach(function (c) { return mpgList.push(c.Miles_per_Gallon); });
    var myMpgSet = new Set(mpgList);
    selectMpg.innerHTML = "";
    myMpgSet.forEach(function (c) {
        var option = "<option value=\"" + c + "\">" + c + "</option>";
        selectMpg.insertAdjacentHTML('afterbegin', option);
    });
}
addNewOrigin();
addNewCylinders();
addNewMpg();
