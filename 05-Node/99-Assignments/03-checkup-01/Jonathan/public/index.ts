
const form = document.querySelector('#form')
form.addEventListener('submit', addStudent)

async function getAllStudents() {
    try {
        const { data, error } = await axios('/student/all_students')
        console.log(data)
        if (error) throw error

    } catch (e) {

    }
}


async function addStudent(ev) {
    ev.preventDefault();
    try {
        const name = ev.target.elements.name.value;
        if (!name) throw new Error('no name was given');

        const { data, error } = await axios.post('/student/add_student', { name })

        renderStudents(data)

        if (error) throw error;

    } catch (e) {

    }

}

function renderStudents(students) {
    try {
        let html: string = '';
        
        const root = document.querySelector('#root') as HTMLElement;
        
        students.students.forEach(element => {
            html+=`${element.name}, ${element.id}`
        });
        
        root.insertAdjacentHTML('afterbegin', html)

    } catch (e) {

    }
}


getAllStudents()