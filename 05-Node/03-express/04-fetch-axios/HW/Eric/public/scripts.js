



function handleSubmit(ev) {
    ev.preventDefault()

    const name = ev.target.name.value
    const age = ev.target.age.value
    const id = ev.target.id.value
    const avgGrade = ev.target.avgGrade.value
    console.log(name)
    axios.post('/addStudent', {name, age, id, avgGrade})
        .then((res) => {
            console.log(res)
        })

}



function loadStudents(){
    const list = document.getElementById("root")
    axios.get('/getStudents')
        // .then(res=>res.data.students.forEach(element => list.innerHTML += ` ${element.name} `))
        .then(res=>list.innerText = res.data);
        console.log(list);
            
}


function handleGetParams(ev) {
    ev.preventDefault()
    const studentId = ev.target.studentId.value
    console.log(studentId)

}

function handleGetQuery(ev) {
    ev.preventDefault()
    console.log('hola')

}
// handleGetQuery()
// handleGetParams()