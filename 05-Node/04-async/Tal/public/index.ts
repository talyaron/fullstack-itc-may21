interface Student {
    name: string,
    grade: number
}


async function getInfo():Promise<void> {
    try{
    //SIMPLE PROMISE:

    // console.time('students')
    // fetch('/getData')
    // .then(r=>r.json())
    // .then(students=>{
    //     console.log(students);
    //     console.timeEnd('students')
    //     renderStudents(students);

    //     //callback hell (or promise hell)
    //     console.time('joke')
    //     fetch('https://api.chucknorris.io/jokes/random')
    //     .then(r=>r.json())
    //     .then(joke=>{
    //         console.log(joke.value);

    //        console.timeEnd('joke');
    //     })

    // })


    //ASYNC AWAIT




    const students = await getStudents();
    const joke = await getJoke();


    console.log('after fetch')

    } catch(e){
        console.error(e)
    }


}

//creating promises

// create an promise

function getStudents() {

    return new Promise((resolve, reject) => {
        //resolve = this will be retuned if the promise was allright
        //reject = in error case the

        // reject(new Error('error'))

        fetch('/getData')
            .then(r => r.json())
            .then(students => {
                resolve(students)
            })
            .catch(e => {
                reject(e)
            });
    })
}

function getJoke() {

    return new Pro§mise((resolve, reject) => {
        //resole = the will be retuned if the promise was allright
        //reject = in error case the
        fetch('https://api.chucknorris.io/jokes/random')
            .then(r => r.json())
            .then(data => {
                resolve(data.value)
            })
            .catch(e => {
                reject(e)
            });
    })
}

async function getStudentAndAJoke(){
    let students = await getStudents();
    let joke = await getJoke();
} 

//redner to the DOM

getInfo();

function renderStudents(data) {
    console.log(data)
    let html = '';
    data.forEach(student => {
        html += `<p>${student.name}</p>`
    })

    document.getElementById('root').innerHTML = html;
}

// renderStudents(students);