const BuildingRoot: HTMLElement = document.querySelector("#builidingRoot")
const listOfResidents: HTMLElement = document.querySelector("#listOfResidents")
const closeButton: void = document.querySelector("#close").addEventListener('click', (){
    listOfResidents.style.display = 'none'
    BuildingRoot.style.display = 'flex'
})

interface Resident {
    name: string;
    residentNumber: number;
    building: string;
}
function addArrayOfResidemt(building: string) {

    let residentNumber: number = 0;
    let residentsArray: Array<Resident> = [];
    function _add(name: string) {

        if (name === "l") {
            const listRes: HTMLElement = document.querySelector("#listRes");
            listOfResidents.style.display = 'block'
            BuildingRoot.style.display = 'none'
            let resHtml: string = "";
            residentsArray.forEach(res => {
                resHtml += `<div>hello resdient ${res.name}, you are 
                resident number ${res.residentNumber} of ${res.building}</div>`
            })
            listRes.innerHTML = resHtml;


        }
        if (name !== "l") {
            const bldgOne: HTMLElement = document.querySelector("#buildingOne");
            const bldgTwo: HTMLElement = document.querySelector("#buildingTwo");
            residentNumber++;
            residentsArray.push({ name, residentNumber, building })
            const residnetHtml: string = `<div>hello resdient ${name}, you are resident number ${residentNumber} of ${building}</div>`
            if (building === "building one") {
                bldgOne.insertAdjacentHTML("afterbegin", residnetHtml)
            }
            if (building === "building two") {
                bldgTwo.insertAdjacentHTML("afterbegin", residnetHtml)
            }
        }
    }
    return _add
}

const form = document.querySelector("#form").addEventListener('submit', handleSubmit);
function handleSubmit(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const building = ev.target.elements.building.value;
    if (building === "building one") {
        addResToArray1(name)
    }
    if (building === "building two") {
        addResToArray2(name)
    }

    ev.target.reset();

}


const addResToArray1 = addArrayOfResidemt("building one")
const addResToArray2 = addArrayOfResidemt("building two")


