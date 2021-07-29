const pepe = document.querySelector('.pepe')

pepe.addEventListener('click', loadStudents)


function handleSubmit(ev) {
    ev.preventDefault()

    const name = ev.target.name.value
    const age = ev.target.age.value
    const id = ev.target.id.value
    const avgGrade = ev.target.avgGrade.value
    
    axios.post('/aa', {
            name,
            age,
            id,
            avgGrade
        })
        .then((res) => {
            //console.log(res)
        })
    
}



function loadStudents(ev) {
    let html = ''
    ev.preventDefault()
    const list = document.getElementById("root")
    axios.get('/aa')
    .then(({data} ) => {
        data.forEach(element => {
          html += `${element.name},`      
        });
        list.innerHTML = html
    })
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