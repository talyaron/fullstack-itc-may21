async function getAllStudents() {
    try {
        const { data, error } = await axios('/students/all_students')
        if (error) {
            console.log(data);

        }
    } catch (error) {
        console.error(error)
    }
}

async function addStudent(event) {
    try {
        event.preventDefault();
        const name = event.target.elements.name.value
        if (!name) {
            throw new Error('No name')
            const { date, error } = await axios.post('/students/add_student', { name })
        }
    } catch (error) {
        console.error(error)
    }
}