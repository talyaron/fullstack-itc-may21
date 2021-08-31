async function addStudentAxios(newStudent) {
    try {
        const response = await axios.post('/student/addStudent', newStudent);
        return response.data
    } catch (error) {
        alert(error.response.data.error)
    }

}

async function getStudentsAxios() {
    const response = await axios.get('/student/getStudents')
    return response
}

async function deleteStudent(id: string){
    await axios.delete(`/student/deleteStudent/${id}`)
    getStudents()
}

async function bringStudentAxios(id:string){
    try {
        const response = await axios.get(`/student/bringStudent/${id}`)
        return response.data
    } catch (error) {
        alert(error.response.data.error)

    }
}

async function editStudentsAxios(newInfo, id:string) {
    try {
        const response = await axios.put(`/student/editStudent/${id}`, newInfo);
        return response.data
    } catch (error) {
        alert(error.response.data.error)
    }

}
