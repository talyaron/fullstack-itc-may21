async function getAllStudents() {
    try {
        const { data, error } = await axios('/students/all_students')
        console.log(data)
        if(error) throw error
        const {students} = data
        console.log(students);
        renderStudents(students)

    } catch (e) {

    }
}


async function addStudent(ev){
    
    try{
    ev.preventDefault();        
    const name = ev.target.elements.name.value
    console.log(name);
    
    if(!name) throw new Error('no name was given')

    const {data, error} = await axios.post('/students/add_students', {name})
    if(error) throw error
    console.log(data)
    const {students} = data
    renderStudents(students)

    }catch(e){
        console.error(e.message)
    }


}


// function renderStudents(students:Array<any>){   
//     try{
//         const root = document.querySelector('.root')
//         let html = ''
        
//         html += ``



//     }

// }

getAllStudents()


async function getRandomStudent(){
    try{
        const numberOfNames= document.getElementById('numberOfNames').valueAsNumber
        console.dir(numberOfNames);
        

    }catch(error{

    }



}