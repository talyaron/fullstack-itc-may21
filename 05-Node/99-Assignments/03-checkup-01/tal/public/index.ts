async function getAllStudents() {
    try {

        const { data, error } = await axios('/students/all_students');

        if (error) throw error;
        const {students} = data;

        console.log(students);

        renderStudents(students)


    } catch (error) {

    }
}

async function getRandomStudents(){
    try {

        const numberOfNames = document.getElementById('numberOfNames').valueAsNumber;
        console.log(numberOfNames)
        console.log('ffdg')
        const {data, error} = await axios.post('/students/random_students',{number:numberOfNames});
        const {students} = data;

        console.log(students);

        renderStudents(students)

    } catch (error) {
        
    }
}

async function addStudent(ev) {
    
    try {
        ev.preventDefault();
     
        const name = ev.target.elements.name.value;
        if (!name) throw new Error('no name was given');
        console.log(name)
        const {data, error} = await axios.post('/students/add_student',{name});

        if (error) throw error;

        console.log(data);

        const {students} = data;  
        renderStudents(students)

        ev.target.reset();

    } catch (e) {
        console.error(e.message)
    }

}

function renderStudents(students:Array<any>){
    try {
        const root = document.getElementById('root');
        let html ='';
        students.forEach(student=>{
            html += `<p>${student.name} <span onclick="deleteStudent('${student.id}')">DELETE</span></p>`
        });

        root.innerHTML = html;



    } catch (error) {
        
    }
}


getAllStudents();
