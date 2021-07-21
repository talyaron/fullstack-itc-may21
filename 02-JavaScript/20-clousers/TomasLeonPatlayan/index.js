var getResidents = function () {
    var resident = [];
    var showResident = function (residents) {
        if (residents === 'l')
            return resident;
        resident.push(residents);
        return "Welcome " + residents + ", now you are the number " + resident.length;
    };
    return showResident;
};
var buildingA = getResidents();
var buildingB = getResidents();
var handleSubmitA = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    console.log(buildingA(name));
};
var handleSubmitB = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    console.log(buildingB(name));
};
// const handleSubmitB = (event) => {
//     event.preventDefault();
//     const name = event.target.elements.name.value;
//     console.log(buildingA(name));
//   };
