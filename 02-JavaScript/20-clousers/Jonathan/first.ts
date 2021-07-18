
const boardFirst = <HTMLElement>document.querySelector('#boardFirst')
const btnReturn = <HTMLElement>document.querySelector('.header__return')
const residentList = JSON.parse(localStorage.getItem('exercise'))


renderExerciseOne(residentList)

function renderExerciseOne(arrayToRenderFirst: Array<Resident>) {

    try {

        if (!boardFirst) throw new Error('It cant be possible to show the result of this exercise')

        function countMaker() {
            let count: number = 0;
            function _welcomeResident(name: string) {
                count++
                return `<div class="boardFirst__resident">
                    <span class="boardFirst__resident--welcome">Hello ${name}, you are resident Nro: ${count}</span>
                    </div>`;
            }
            return _welcomeResident
        }

        const welcomeResident = countMaker()

        let html: string = ''

        arrayToRenderFirst.forEach(elem => {
            const { name } = elem
            html += `${welcomeResident(name)}`
           
        });

        boardFirst.innerHTML = html;

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