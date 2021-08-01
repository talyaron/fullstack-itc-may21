//form
const form = document.querySelector('#form')

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
form.addEventListener('submit', handleSumbit)

//input
const inputSearchStudenbyID = document.querySelector('#searchid')

//addStudent
async function handleSumbit(ev) {
    try {
        ev.preventDefault()

        const id = ev.target.elements.id.valueAsNumber
        const name = ev.target.elements.name.value
        const age = ev.target.elements.age.valueAsNumber
        const avgrade = ev.target.elements.avgrade.valueAsNumber

        const newStudent = {
            id: id,
            name: name,
            age: age,
            avgrade: avgrade
        }

        if (!(/^[a-zA-Z]+$/.test(name))) throw new Error('The name must be in text')

        await addStudentPromise(newStudent)



    } catch (e) {
        alert(e);
    }
}

//getStudent
async function getAllStudent(ev) {

    try {
        ev.preventDefault()
        const allStudents = await getAllStudentsPromise()
        if (allStudents.length === 0) throw new Error('No students on the database')
        renderStudents(allStudents)
    } catch (e) {
        alert(e)
    }
}

//getIdParams
async function getStudentParams(ev) {
    try {

        ev.preventDefault()
        const student = await getOneStudent('query')
        renderStudents(student)
    } catch (e) {

    }
}

//getIdQuery
async function getStudentQuery(ev) {

    ev.preventDefault()
    await getOneStudent('query')
    const student = await getOneStudent('query')
    renderStudents(student)
}



async function deleteStudent(id) {
    if (confirm("Do you want to delete this student?")) {
        alert('Delete Student')
        const student = await deleteStudentPromise(id)
        renderStudents(student)
    } else {
        alert('Delete Cancelled!')
    }


}


function renderStudents(data) {
    let html = ''

    if (data.length > 0) {
        html += `<table id="students" class="container__main--board__student">
        <thead>
    <tr>
        <th>Mispar Zehut</th>
        <th>Name</th>
        <th>Age</th>
        <th>Average Grade</th>
        <th></th>
    <tr>
    </thead>
    <tbody>`


        data.forEach(elem => {

            const { id, name, age, avgrade } = elem

            html += `<tr>
                      <td>${id}</td>
                        <td>${name}</td>
                        <td>${age}</td>
                        <td>${avgrade}</td>
                        <td><i class="fa fa-trash" onclick='deleteStudent("${id}")' title="Delete Item" style="cursor:pointer"></i></td>   
                 </tr> `
        });



        html += `</tbody></table>`
    } else {
        let html = ''
    }
    boardStudent.innerHTML = html
}



