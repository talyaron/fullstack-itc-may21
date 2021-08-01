const stud = document.querySelector('.containerPage__containerForm1__form1--stud')
//btn
const btnGetDataQuery = document.querySelector('.containerPage__containerForm2--submitQuerys')
const btnGetDataParams = document.querySelector('.containerPage__containerForm2--submitParams')
//inputID
let inputId = document.querySelector('.containerPage__containerForm2--input')
 btnGetDataQuery.addEventListener('click', getDataQuery)
 btnGetDataParams.addEventListener('click', getDataParam)

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
        data.forEach(element => {
          html += `<div>${element.name}, ${element.age},  ${element.avgGrade}, ${element.id}  <div>`      
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

//axios
//   function getDataQuery(ev) {
     
//      axios.get(`/getStudents?id=${inputId.value}`)
//         .then(({ data }) => {
//          render([data])
//          })
//  }

//async
async function getDataQuery(ev) {

    const data = await axios.get(`/getStudents?id=${inputId.value}`)

    render([data.data])

}


 function getDataParam(ev) {

        axios.get(`/getStudents/${inputId.value}`)
        .then(({ data }) => {
            render([data])

        })

}


