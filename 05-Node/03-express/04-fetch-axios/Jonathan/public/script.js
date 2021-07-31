//form
//const form = document.getElementById('form')

//btn
const btnGetAllStudent = document.querySelector('.container__main__actions--getallstudents')
const btnGetStudentParams = document.querySelector('.container__main__actions__search--params')
const btnGetStudentQuery = document.querySelector('.container__main__actions__search--query')

//boardRoot
const boardStudent = document.querySelector('#boardStudent')




//addEventListener

btnGetAllStudent.addEventListener('click', getAllStudent)
btnGetStudentParams.addEventListener('click', getStudentParams)
btnGetStudentQuery.addEventListener('click', getStudentQuery)
//form.addEventListener('sumbitk', addStudentOnList)


//input
const inputSearchStudenbyID = document.querySelector('#searchid')


//addStudent
async function handleSumbit(ev) {
    try {
        ev.preventDefault()

        const id = ev.target.elements.id.value
        const name = ev.target.elements.name.value
        const age = ev.target.elements.age.value
        const avgrade = ev.target.elements.avgrade.value

        const student = await addStudentPromise(id, name, age, avgrade)
        

    } catch (e) {
        console.log(e);
    }
}

//getStudent
async function getAllStudent(ev) {

    try {
        ev.preventDefault()
        const allStudents = await getAllStudentsPromise()
        if (allStudents.length === 0) throw new Error('No student on the database')
        renderStudents(allStudents)
    } catch (e) {
        alert(e)
    }
}

//getIdParams
async function getStudentParams(ev) {
    try {

        ev.preventDefault()
        const student = await getStudentParamsPromise()
        renderStudents(student)
    } catch (e) {

    }
}

//getIdQuery
async function getStudentQuery(ev) {

    ev.preventDefault()
    const student = await getStudentQueryPromise()
    renderStudents(student)
}



async function deleteStudent(id) {
    const student = await deleteStudentPromise(id)
    renderStudents(student)

}


function addStudentPromise(id, name, age, avgrade) {
    return new Promise((resolve, reject) => {
        fetch('/addStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, age, avgrade })
        }).then(r => r.json())
            .then(r=>alert(r.error))
            .then(student => {resolve(student)})
            .catch(e => {
                reject(e)
            })
    })
}



function deleteStudentPromise(id) {
    return new Promise((resolve, reject) => {
        fetch(`/deleteStudent/${id}`, {
            method: 'DELETE'
        })
        
            .then(r => r.json())
            .then(student => { resolve(student) })
            .catch(e => {
                reject(e)
            })
    })
}







function getStudentQueryPromise() {
    const id = inputSearchStudenbyID.value
    return new Promise((resolve, reject) => {
        fetch(`/getStudentbyQuery?id=${id}`)
            .then(r => r.json())

            .then(student => { resolve(student) })
            .catch(e => {
                reject(e)
            })
    })
}


function getStudentParamsPromise() {
    const id = inputSearchStudenbyID.value
    return new Promise((resolve, reject) => {
        fetch(`/getStudentbyParam/${id}`)
            .then(r => r.json())
            
            .then(student => { resolve(student) })
            .catch(e => {
                reject(e)
            })
    })
}



function getAllStudentsPromise() {
    return new Promise((resolve, reject) => {
        fetch('/getAllStudents')
            .then(r => r.json())
            .then(student => { resolve(student) })
            .catch(e => {
                reject(e)
            })
    })
}




function renderStudents(data) {
    let html = ''

    if (data.length > 0) {
        html += `<table id="students">
        <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Average Grade</th>
        <th></th>
    <tr>
    </thead>
    <tbody>`


        data.forEach(elem => {
            html += `<tr>
                      <td>${elem.id}</td>
                        <td>${elem.name}</td>
                        <td>${elem.age}</td>
                        <td>${elem.avgrade}</td>
                        <td><i class="fa fa-trash " onclick='deleteStudent("${elem.id}")' title="Delete Item"></i></td>   
                 </tr> `
        });



        html += `</tbody></table>`
    } else {
        let html = ''
    }
    boardStudent.innerHTML = html
}



