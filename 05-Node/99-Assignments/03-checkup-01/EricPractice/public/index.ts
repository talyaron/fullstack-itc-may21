

const form = document.querySelector('#form')  as HTMLFormElement
const body = document.querySelector('#body')  as HTMLBodyElement
const btnEdit = document.querySelector('.btn-edit') as HTMLButtonElement

form.addEventListener('submit',addStudents )

body.onload = getStudents
async function getStudents(){
    try {
        const getStudent = await getStudentsAxios()
        const {data, error} = getStudent
        renderStudents(data.students)

    } catch (error) {
        console.error(error)
        
    }
}

btnEdit.onclick = editStudents

let idStudent;






async function addStudents (ev){
    ev.preventDefault()
    try {
        let{firstname, lastname, age} = ev.target.elements;
        firstname = firstname.value
        lastname = lastname.value
        age = age.value
        
        const newStudent = {firstname:firstname, lastname:lastname, age:age}
        const student = await addStudentAxios(newStudent)
        
        renderStudents(student.students)
        
        

    } catch (error) {
        
    }
}


function renderStudents(students){
    try {
        let html:string = ''
        const root = document.querySelector('#root')
        students.students.forEach(student => {
            const {id,firstname, lastname, age} = student

            html += `<div>
                        <span>Firstname: ${firstname}</span>
                        <span>Lastname: ${lastname}</span>
                        <span>Age: ${age}</span>
                        <button class="btn-delete" onclick="deleteStudent('${id}')">Delete</button>
                        <button class="btn-bring" onclick="bringStudent('${id}')">Bring</button>

                    </div>`
            
        });
        root.innerHTML = html
        
    } catch (e) {
        console.error(e);
        
    }

}


async function bringStudent(id: string){
    let firstname = document.querySelector('#firstname') as HTMLInputElement    
    let lastname = document.querySelector('#lastname') as HTMLInputElement    
    let age = document.querySelector('#age') as HTMLInputElement  
    
    let brindData = await bringStudentAxios(id)
    console.log(brindData);
    
    firstname.value = brindData.student.firstname
    lastname.value = brindData.student.lastname
    age.value = brindData.student.age 

    idStudent = id
}

async function editStudents(ev){
    ev.preventDefault()
    try {
        const firstname = document.querySelector('#firstname') as HTMLInputElement    
        const lastname = document.querySelector('#lastname') as HTMLInputElement    
        const age = document.querySelector('#age') as HTMLInputElement  

        const editData ={firstname: firstname.value, lastname: lastname.value, age: age.value}
        const editStudent = await editStudentsAxios(editData, idStudent)
        console.log(editData);
        renderStudents(editStudent)
        
    } catch (error) {
        
    }
}