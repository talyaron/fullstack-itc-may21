
const boardSecond = <HTMLElement>document.querySelector('#boardSecond')
const btnReturn = <HTMLElement>document.querySelector('.header__return')
const residentList = JSON.parse(localStorage.getItem('exercise'))



renderExerciseTwo(residentList)

function renderExerciseTwo(arrayToRenderTwo: Array<Resident>) {

    try {

        if (!boardSecond) throw new Error('It cant be possible to show the result of this exercise')

        function getResidents() {
            let arrayNames: Array<string> = []
            return function _getName(name: string) {
                arrayNames.push(name)
                return arrayNames
            }

        }

        const welcomeResident = getResidents()

        let result;
        let html: string = ''

        for (let i = 0; i < arrayToRenderTwo.length; i++) {
            const { name } = arrayToRenderTwo[i]
            result = (welcomeResident(`${name}`))
        }

        result.forEach(element => {
            html += `<div class="boardSecond--resident">${element}</div>`
        })

        boardSecond.innerHTML = html

    } catch (e) {
        alert(e)
    }

}

btnReturn.addEventListener('click', returnPage)

function returnPage() {
    try {
        window.location.href = "index.html"
        if (!window.location.href) throw new Error("The page does not exist");
    } catch (e) {
        alert(e)
    }

}