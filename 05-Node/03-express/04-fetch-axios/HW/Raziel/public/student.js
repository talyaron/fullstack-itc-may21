
const formOne=document.querySelector('.formOne');


class Student{
    constructor(name,age,grade,id){
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.id = id;
    }
}

function handelSubmit(ev){

    ev.preventDefault();
    const name=ev.target.elements.name.value;
    const age=ev.target.elements.age.value;
    const grade=ev.target.elements.grade.value;
    const id=ev.target.elements.id.value;

    const newStudent=new Student(name, age, grade,id);
    console.log(newStudent);
    axios.put('/newStudent',{newStudent})
    .then(res=>{
        console.log(res.data.student)
    })
    .catch(e=>{
        console.error(e)
    })

   

    ev.target.reset()
}
formOne.addEventListener('submit', handelSubmit );