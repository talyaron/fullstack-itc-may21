const inputRandom = document.querySelector('#random') as HTMLInputElement


inputRandom.onkeyup = getRandomStudents

async function getRandomStudents(){
    try {
        const inputRandom = document.querySelector('#random') as HTMLInputElement
        const random = {
            random: inputRandom.valueAsNumber
        }
        
        const getRandom = await getRandomAxios(random)

        console.log(getRandom);
        renderRandom(getRandom)


    } catch (error) {
        console.log(error)
    }
}

function renderRandom(getRandom){
    let html: string =''
    const root = document.querySelector('#root')
    getRandom.students.forEach(student => {
        const {firstname, lastname, age} = student
        html += `<div>
                <span>${firstname}</span>
                <span>${lastname}</span>
                <span>${age}</span>

                </div>`


    });

    root.innerHTML = html

}