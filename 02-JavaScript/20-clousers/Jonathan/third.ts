const boardThird = <HTMLElement>document.querySelector('#boardThird')
const btnReturn = <HTMLElement>document.querySelector('.header__return')
const residentList = JSON.parse(localStorage.getItem('exercise'))

renderExerciseThree(residentList)

function renderExerciseThree(arrayToRenderThree: Array<Resident>) {

    try {

        if (!boardThird) throw new Error('It cant be possible to show the result of this exercise')

        function getResidents(){
            let buildingA = []
            let buildingB = []
            return function _getName(name:string, building:string){
                if (building === 'A'){
                    buildingA.push(name)
                }else{
                    buildingB.push(name)
                }
                return [
                    buildingA,
                    buildingB
                ]
            }
        }
    
        const getNames = getResidents()

        let result;
        let html: string = ''

        for (let i = 0; i < arrayToRenderThree.length; i++) {
            const {name, building } = arrayToRenderThree[i]
            result = (getNames(`${name}`, `${building}`))
        }

        const [buildingA, buildingB] = result
      
        html += `<div>
            <div class="boardThird__building">Building A </div>`

        buildingA.forEach(element => {

            html += `<div  class = "boardThird__building--resident">${element}</div>`

        });

        html += '</div>'

        html += `<div>
            <div class="boardThird__building">Building B</div>`

        buildingB.forEach(element => {
            html += `<div class = "boardThird__building--resident">${element}</div>`
        });

        html += '</div>'


        boardThird.innerHTML = html;
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