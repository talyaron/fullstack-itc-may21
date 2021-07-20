/* 
Instructions:
1)Write a closure function that will get the name of a resident:
Welcome('Efraim')
-> Hello, Efraim. You are resident number 1.

The function will return "Hello, resident. You are resident number X" and will count the number of residents.

2)Create a closure function that holds in its closure the names of all residents.
If the input argument is 'l', return an array with all residents --- welcome(l)

3)Create it for building A and building B.
*/


class Resident {
    name:string
    id:string
    constructor(name:string) {
        this.name = name
        this.id = "id" + Math.random().toString(16).slice(2)
    }
}


const addResident = (resident:Resident):void => {
    try {
        if(!resident) throw new Error("No resident found");
        
        this.residentList.unshift(resident)   
    
    } catch (error) {
        console.error(error);
    }
}


function residentCounter() {
    let count = 0;
    return function() {
        count++
    }
}

const residentListA = residentCounter()
const residentListB = residentCounter()


const displayResidents = () => {
    const residentList:Array<Resident> = [];
    const residentsInBuilding = (resident: Resident) => {
        if (resident.name === 'l') {
            alert(`Persons residing here: ${residentList}`)
            return
        }
       return residentsInBuilding 
    }
}

//Handle submit functions:
function handleSubmitA(event:any) {
        event.preventDefault()
        const residentName:string = event.target[0].value

        const newResident = new Resident(residentName)
        
        residentListA.addResident(newResident)
        event.target.reset()
        alert(`Hello, ${residentName}. You are resident number ${residentListA.residentList.length}`)
}

function handleSubmitB(event:any) {
    event.preventDefault()
    const residentName:string = event.target[0].value
    
    const newResident = new Resident(residentName)
    
    residentListB.addResident(newResident)
    event.target.reset()
    alert(`Hello, ${residentName}. You are resident number ${residentListB.residentList.length}`)
}