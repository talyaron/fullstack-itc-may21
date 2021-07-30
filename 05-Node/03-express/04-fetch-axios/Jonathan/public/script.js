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
function handleSumbit(ev) {
    try {
        ev.preventDefault()

        const id = ev.target.elements.id.value
        const name = ev.target.elements.name.value
        const age = ev.target.elements.age.value
        const avgrade = ev.target.elements.avgrade.value

        axios.post('/addStudent', { id, name, age, avgrade })

        alert('Student Added')
      
    } catch (e) {
        console.log(e);
    }
}

//getStudent
function getAllStudent(ev) {

    try {

        ev.preventDefault()
        axios.get('/getAllStudents')
            .then(({ data }) => {

                if (data.length === 0) throw new Error('No student on the database')

                render(data)

            })
    } catch (e) {
        alert(e)
    }
}

//getIdParams
function getStudentParams(ev) {

    ev.preventDefault()
    const id = inputSearchStudenbyID.value
    axios.get(`/getStudentbyParam/${id}`)
        .then(({ data }) => {
            console.log(data)
            render(data)
        })
}

function getStudentQuery(ev) {

    ev.preventDefault()
    const id = inputSearchStudenbyID.value
    axios.get(`/getStudentbyQuery?id=${id}`)
        .then(({ data }) => {
            console.log(data)
            render(data)
        })
}

function deleteStudent(id) {
    console.log(id)

    axios.delete(`/deleteStudent/${id}`)
        .then(({ data }) => {
            console.log(data)
            render(data)
            alert('Delete Student')

        })
}


function render(data) {
    let html = ''

    html += `<table id="students">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Average Grade</th>
        <th></th>
    <tr>`


    data.forEach(elem => {
        html += `<tr>
                      <td>${elem.id}</td>
                        <td>${elem.name}</td>
                        <td>${elem.age}</td>
                        <td>${elem.avgrade}</td>
                        <td><i class="fa fa-trash " onclick='deleteStudent("${elem.id}")' title="Delete Item"></i></td>   
                 </tr> `
    });



    html += `</table>`
    boardStudent.innerHTML = html
}



