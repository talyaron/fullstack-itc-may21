

const form = document.querySelector('#form')  as HTMLFormElement
const body = document.querySelector('#body')  as HTMLBodyElement

body.onload = getStudents
async function getStudents(ev){
    ev.preventDefault()
    try {
        const getStudent = await getStudentsAxios()
        const {data, error} = getStudent
        renderStudents(data.students)

    } catch (error) {
        console.error(error)
        
    }
}

form.addEventListener('submit',addStudents )

async function addStudents (ev){
    ev.preventDefault()
    try {
        let{firstname, lastname, age} = ev.target.elements;
        firstname = firstname.value
        lastname = lastname.value
        age = age.value
        
        const newStudent = {firstname:firstname, lastname:lastname, age:age}
        const student = await addStudentAxios(newStudent)
        
        const {data, error} = student     
        renderStudents(data.students)
       
        

    } catch (error) {
        
    }
}


function renderStudents(students){
    try {
        let html:string = ''
        const root = document.querySelector('#root')
        students.students.forEach(student => {
            const {firstname, lastname, age} = student

            html += `<div>
                        <span>Firstname: ${firstname}</span>
                        <span>Lastname: ${lastname}</span>
                        <span>Age: ${age}</span>
                    </div>`
            
        });
        root.innerHTML = html
        
    } catch (e) {
        console.error(e);
        
    }

}
