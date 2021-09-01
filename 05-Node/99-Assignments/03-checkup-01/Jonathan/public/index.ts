const form = document.querySelector('#form') as HTMLFormElement;
const body = document.querySelector('#body') as HTMLBodyElement;
const btnEdit = document.querySelector('.btn-edit') as HTMLButtonElement;
const inputSearch = document.querySelector('#search') as HTMLInputElement;

form.onsubmit = addStudent
body.onload = getStudents
btnEdit.onclick = editStudent
inputSearch.onkeyup = searchByLastName

let idStudent;

async function getStudents() {
    try {
        const getStudents = await getStudentsAxios()
        const { data, error } = getStudents

        renderStudents(data.students)


    } catch (e) {
        console.error(e)
    }
}



async function addStudent(ev) {
    ev.preventDefault();
    try {
        let { firstname, lastname, age } = ev.target.elements
        firstname = firstname.value;
        lastname = lastname.value;
        age = age.valueAsNumber;

        const newStudent = {
            firstname: firstname,
            lastname: lastname,
            age: age,
            actions: 0,
        }

        const student = await addStudentAxios(newStudent)

        if(typeof student === 'string') throw new Error (`${student}`)


        renderStudents(student.students)

        ev.target.reset();
    } catch (e) {
        alert(e)
    }
}

function renderStudents(students) {
    try {

        let html: string = ''
        const root = document.querySelector('#root')

        students.students.forEach(student => {

            const { id, firstname, lastname, age } = student

            html += `<div>
                      <span>Firstname: ${firstname}</span>
                      <span>Lastname: ${lastname}</span>
                      <span>Age: ${age}</span>
                      <button class="btn-delete" onclick="deleteStudent('${id}')">DELETE</button>
                      <button class="btn-bring" onclick="bringStudent('${id}')">Bring</button>
                    </div>`
        });

        root.innerHTML = html

    } catch (e) {
        console.error(e)
    }
}

async function bringStudent(id: string) {

    let firstname = document.querySelector('#firstname') as HTMLInputElement;
    let lastname = document.querySelector('#lastname') as HTMLInputElement;
    let age = document.querySelector('#age') as HTMLInputElement;

    const bringData = await bringStudentAxios(id)

    firstname.value = bringData.student.firstname
    lastname.value = bringData.student.lastname
    age.value = bringData.student.age

    idStudent = id
}

async function editStudent(ev) {
    ev.preventDefault()

    try {


        const firstname = document.querySelector('#firstname') as HTMLInputElement;
        const lastname = document.querySelector('#lastname') as HTMLInputElement;
        const age = document.querySelector('#age') as HTMLInputElement;

        const editData = {
            firstname: firstname.value,
            lastname: lastname.value,
            age: age.valueAsNumber,
            actions:1,
        }

        const editStudent = await editStudentAxios(editData, idStudent)
        renderStudents(editStudent)


    } catch (e) {

    }
}


async function searchByLastName() {
    try {

        const searchLastName = {
            searchLastName: inputSearch.value
        }

        const getSearchByLastName = await getSearchByLastNameAxios(searchLastName)
        const { data } = getSearchByLastName

        renderStudents(data)


    } catch (e) {
        console.log(e)
    }
}






