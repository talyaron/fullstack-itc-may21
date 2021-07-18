const inputName = <HTMLElement>document.querySelector('#name')
const form = <HTMLElement>document.getElementById('form')
const btnReset = <HTMLButtonElement>document.querySelector('.container--reset')

//btn
const btnFirst = <HTMLButtonElement>document.querySelector('.container__exercises__fieldset--first')
const btnSecond = <HTMLButtonElement>document.querySelector('.container__exercises__fieldset--second')
const btnThird = <HTMLButtonElement>document.querySelector('.container__exercises__fieldset--third')


interface Resident {
    name: string
    building: string;
}

let ResidentList: Array<Resident> = []

const previousEnters = JSON.parse(localStorage.getItem("exercise"))

if (previousEnters !== null) {
    previousEnters.forEach(element => {
        ResidentList.push({ "name": element.name, "building": element.building})
    });
}

form.addEventListener('submit', handleSubmit)

function handleSubmit(ev: any): void {

    ev.preventDefault();
    try {

        const name = ev.target.elements.name.value;
        
        if(!name) throw new Error('You have to enter a name first')

        if (name === 'l') {
            btnSecond.disabled = false;
            btnThird.disabled = false;
            btnSecond.style.cursor = 'pointer'
            btnThird.style.cursor = 'pointer'
            alert('Now you can use the second and third button to check all residents and which building they are in')

        } else {

            ResidentList.push({ "name": name, "building": Math.random() >= 0.5 ? 'A' : 'B' })
            localStorage.setItem("exercise", JSON.stringify(ResidentList))
            alert('You enter a new resident. Please check the entry number with the first button')

        }

    } catch (e) {
        alert(e)
    }

    ev.target.reset()
}



//btn

btnFirst.addEventListener('click', firstExercise)
function firstExercise() {
    window.location.href = "first.html"
}

btnSecond.addEventListener('click', secondExercise)
function secondExercise() {
    window.location.href = "second.html"
}

btnThird.addEventListener('click', thirdExercise)
function thirdExercise() {
    window.location.href = "third.html"
}

btnReset.addEventListener('click', resetLocalStorage)

function resetLocalStorage(){
    localStorage.clear()
    ResidentList = []
}


