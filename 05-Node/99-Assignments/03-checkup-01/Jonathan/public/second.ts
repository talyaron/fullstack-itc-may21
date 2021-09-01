const inputRandom = document.querySelector('#random') as HTMLInputElement

inputRandom.onkeyup = getRandomStudents;


async function getRandomStudents() {
    try {
        const inputRandom = document.querySelector('#random') as HTMLInputElement

        const random = {
            random: inputRandom.valueAsNumber
        };

        const getRandom = await getRandomAxios(random)
        renderRandom(getRandom.students)

    } catch (e) {
        console.log(e)
    }
}

function renderRandom(getRandom) {
    let html: string = ''
    const root = document.querySelector('#root')

    // for (const student of getRandom) {

    //     const { firstname, lastname, age } = student
    //     html += `<div>
    //             <span>${firstname}</span>
    //             <span>${lastname}</span>
    //             <span>${age}</span>
    //             </div>`
    // }

    html = getRandom.map(student => {
        const { firstname, lastname, age } = student
        return (
            `<div>
                 <span>${firstname}</span>
               <span>${lastname}</span>
                <span>${age}</span>
                </div>`
        )
    }).join('');


    // getRandom.forEach(student => {
    //     const { firstname, lastname, age } = student
    //     html += `<div>
    //             <span>${firstname}</span>
    //             <span>${lastname}</span>
    //             <span>${age}</span>
    //             </div>`
    // });

    root.innerHTML = html
}