document.body.style.backgroundColor = 'aqua'

const formOne = document.querySelector('.formOne')
const formTwo = document.querySelector('.formTwo')
const paramButton = document.querySelector('#paramButton')
class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
        this.id = Math.random().toString(16).slice(2);
    }
}
formOne.addEventListener('submit',  handleSubmit )
formTwo.addEventListener('submit',  handleSubmitFormTwo)
paramButton.addEventListener('click',  handleClick)
function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const grade = event.target.elements.grade.value;

    const newStudent = new Student(name, age, grade)

    axios.put('/newStudent',{newStudent})
    .then(res=>{
        console.log(res.data.student)
    })
    .catch(e=>{
        console.error(e)
    })

   

    event.target.reset()
}


function handleSubmitFormTwo(event){
    event.preventDefault();

    const id = event.target.elements.id.value;
    axios.get(`/${id}`)
    .then(res=>{
        const data = res.data.searchedStudent
        render(data)
    })
    event.target.reset();
}

function handleClick(event) {
    
    const studentId = document.querySelector('#studentId')
    const id = studentId.value;
   
    axios.get(`/${id}`)
    .then(r=>{
      const data = r.data.searchedStudent;
      render(data)

    })
 
    formTwo.reset();
}

function render(data){
    const rootData = document.querySelector('.rootData')
    let html ="";
    data.forEach(student =>{ 
        html += `<p>${student.name}</p><p>${student.grade}</p><p>${student.age}</p>`
    })
    rootData.innerHTML = html;
}