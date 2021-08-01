const stud = document.querySelector('.stud')
//btn
const btnGetDataQuery = document.querySelector('.containerPage__containerForm2--submitQuerys')
const btnGetDataParams = document.querySelector('.containerPage__containerForm2--submitParams')
//inputID
let inputId = document.querySelector('.containerPage__containerForm2--input')
 btnGetDataQuery.addEventListener('click', getDataQuery)
// btnGetDataParams.addEventListener('click', getDataParam)

stud.addEventListener('click', loadStudents)


function handleSubmit(ev) {
    ev.preventDefault()

    const name = ev.target.name.value
    const age = ev.target.age.value
    const avgGrade = ev.target.avgGrade.value
    
    
    axios.post('/postStudents', {
            name,
            age,
            avgGrade,
            
        
        })
        .then((res) => {
            console.log(res)
        })
    
}

function loadStudents(ev) {
    let html = ''
    ev.preventDefault()
    const list = document.getElementById("root")
    axios.get('/getAllStudents')
    .then(({data} ) => {
        console.log(data);
        data.forEach(element => {
          html += `<div>${element.name}, ${element.age},  ${element.avgGrade} <div>`      
        });
        list.innerHTML = html
        
    })
}


function render(array) {
    let html = ''
    const list = document.getElementById("root")
        array.forEach(element => {
          html += `<div>${element.name}, ${element.age},  ${element.avgGrade}, ${element.id}  <div>`      
        });
        list.innerHTML = html
        
    }
render()


 function getDataQuery(ev) {
     let html = ''
     ev.preventDefault()
     console.log(inputId.value);
     axios.get(`/getStudents?id=${inputId.value}`)
        .then(({ data }) => {
         render([data])
         })
 }

//  function getDataParam(ev) {
//     let html = ''
//     ev.preventDefault()
//     let id = inputId.valueAsNumber
//     axios.get(`/getStudents/${id}`)
//         .then(({ data }) => {
//             loadStudents(html, data)
//         })
// }


