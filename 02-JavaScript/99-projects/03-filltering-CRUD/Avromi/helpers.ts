function addNewOrigin() {
    const selectOrigin = document.querySelector("table #origin")
    const originList = [];

    cars.cars.forEach(c => originList.push(c.Origin))
    let mySet = new Set(originList)
    // console.log(mySet);
    selectOrigin.innerHTML = "";
    mySet.forEach(o => {
        const option = `<option value="${o}">${o}</option>`
        selectOrigin.insertAdjacentHTML(`afterbegin`, option)
    });

};


function addNewCylinders() {

    const selectCylinders = document.querySelector("table #cylinders");
    const cylinderList = [];

    cars.cars.forEach(c => cylinderList.push(c.Cylinders))
    let myCylinderSet = new Set(cylinderList)
    selectCylinders.innerHTML = "";
    myCylinderSet.forEach(c => {
        const option = `<option value="${c}">${c}</option>`
        selectCylinders.insertAdjacentHTML('afterbegin', option)
    })
}

addNewOrigin();
addNewCylinders()