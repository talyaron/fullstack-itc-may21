const stud = document.querySelector('.stud')

//btn
const btnGetDataQuery = document.querySelector('.containerPage__containerForm2--submitQuerys')
const btnGetDataParams = document.querySelector('.containerPage__containerForm2--submitParams')

//inputID
const inputId = document.querySelector('.containerPage__containerForm2--input')


// btnGetDataQuery.addEventListener('click', getDataQuery)
// btnGetDataParams.addEventListener('click', getDataParam)
stud.addEventListener('click', loadStudents)


// function getDataQuery(ev) {
//     let html = ''
//     ev.preventDefault()
//     const id = inputId.valueAsNumber
//     axios.put('/updateAvenger', { id })
//         .then(({ data }) => {
//             render(html, data)
//         })
//         console.log('hola')
// }



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
          html += `<div>${element.name}, ${element.id},<div>`      
        });
        list.innerHTML = html
    })
}
