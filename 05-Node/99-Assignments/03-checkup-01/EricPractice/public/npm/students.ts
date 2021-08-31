async function addStudentAxios(newStudent){
    const response = await axios.post('/student/addStudent', newStudent);
    return response
}

async function getStudentsAxios (){
    const response = await axios.get('/student/getStudents')
    return response
}