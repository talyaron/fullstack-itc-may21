var BuildingRoot = document.querySelector("#builidingRoot");
var listOfResidents = document.querySelector("#listOfResidents");
var closeButton = document.querySelector("#close").addEventListener('click', function () {
    listOfResidents.style.display = 'none';
    BuildingRoot.style.display = 'flex';
});
function addArrayOfResidemt(building) {
    var residentNumber = 0;
    var residentsArray = [];
    function _add(name) {
        if (name === "l") {
            var listRes = document.querySelector("#listRes");
            listOfResidents.style.display = 'block';
            BuildingRoot.style.display = 'none';
            var resHtml_1 = "";
            residentsArray.forEach(function (res) {
                resHtml_1 += "<div>hello resdient " + res.name + ", you are \n                resident number " + res.residentNumber + " of " + res.building + "</div>";
            });
            listRes.innerHTML = resHtml_1;
        }
        if (name !== "l") {
            var bldgOne = document.querySelector("#buildingOne");
            var bldgTwo = document.querySelector("#buildingTwo");
            residentNumber++;
            residentsArray.push({ name: name, residentNumber: residentNumber, building: building });
            var residnetHtml = "<div>hello resdient " + name + ", you are resident number " + residentNumber + " of " + building + "</div>";
            if (building === "building one") {
                bldgOne.insertAdjacentHTML("afterbegin", residnetHtml);
            }
            if (building === "building two") {
                bldgTwo.insertAdjacentHTML("afterbegin", residnetHtml);
            }
        }
    }
    return _add;
}
var form = document.querySelector("#form").addEventListener('submit', handleSubmit);
function handleSubmit(ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var building = ev.target.elements.building.value;
    if (building === "building one") {
        addResToArray1(name);
    }
    if (building === "building two") {
        addResToArray2(name);
    }
    ev.target.reset();
}
var addResToArray1 = addArrayOfResidemt("building one");
var addResToArray2 = addArrayOfResidemt("building two");
