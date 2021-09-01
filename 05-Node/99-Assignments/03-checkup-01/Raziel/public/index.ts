async function getStudents() {
    try {
        const { data, error } = await axios.get('students/allStudents');

        if (error) throw error;
    } catch (error) {
        console.error(error);
    }
}


async function addStudent(ev) {
    ev.preventDefault();
    try {
        const name = ev.target.elements.name.value;
        if (!name) throw new Error('Please write a name')

        const { data, error } = await axios.post('students/addStudent', { name });
        if (error) throw error;
        ev.target.reset();
        const { students } = data;
        renderStudents(students);
    } catch (error) {
        console.error(error.message);
    }
}

function renderStudents(students: Array<any>) {
    try {
        const root = document.getElementById('root');
        let html = '';
        students.forEach(student => {
            html += `<p>${student.name} <span onclick="deleteStudent('${student.id}')"> DELETE </span></p>`;
        })
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function getRandomStudent() {
    try {
        const randomStudents = await axios.get('students/randomStudents');
        renderRandomStudents(randomStudents.data.students)
    } catch (error) {
        console.error(error);
    }
}

function renderRandomStudents(students: Array<any>) {
    try {
        const root = document.getElementById('root1');
        let html = '';
        students.forEach(student => {
            html += `<p>${student.name} <span onclick="deleteStudent('${student.id}')"> DELETE </span></p>`;
        })
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}