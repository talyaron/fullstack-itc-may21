async function addStudentAxios(newStudent) {
    try {
        const response = await axios.post('/student/addStudent', newStudent);
        return response.data
    } catch (e) {
        return e.response.data.error
    }
}

async function getStudentsAxios() {
    const response = await axios.get('/student/getStudents')
    return response
}

async function deleteStudent(id: string) {
    await axios.delete(`/student/deleteStudent/${id}`)
    getStudents()
}

async function bringStudentAxios(id: string){
    try {
        const response = await axios.get(`/student/bringStudent/${id}`)
        return response.data
    } catch (e) {
        alert(e.response.data.error)
    }
}

async function editStudentAxios(newInfo, id: string) {
    try {
        const response = await axios.put(`/student/editStudent/${id}`, newInfo);
        return response.data
    } catch (e) {
        alert(e.response.data.error)
    }
}

async function getSearchByLastNameAxios(searchByLastName) {
    const response = await axios.put('/student/searchByLastName' , searchByLastName)
    return response
}

async function getRandomAxios(random) {
    try {
        const response = await axios.post('/student/randomStudents', random);
        return response.data
    } catch (e) {
        return e.response.data.error
    }
}
