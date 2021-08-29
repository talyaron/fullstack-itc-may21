async function getAllStudents() {
    try {
        const { data, error } = await axios('/student/all_students')
        console.log(data)
        if(error) throw error

    } catch (e) {

    }
}

getAllStudents()