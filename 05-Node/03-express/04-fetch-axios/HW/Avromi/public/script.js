document.body.style.backgroundColor = 'lightgreen'

const form = document.querySelector('form')
class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
        this.id = Math.random().toString(16).slice(2);
    }
}

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const grade = event.target.elements.grade.value;

    const newStudent = new Student(name, age, grade)

    axios.put('/newStudent',{newStudent})
    .then(res=>{
        console.log(res.data)
    })
    .catch(e=>{
        console.error(e)
    })


    event.target.reset()
}