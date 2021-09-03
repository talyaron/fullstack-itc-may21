async function addUserAxios(newUser) {
    try {
        const response = await axios.post('/user/addUser', newUser)
        return response
    } catch (e) {
        return e.response.data.error
    }
}

async function getAllUsersAxios() {
    try {
        const response = await axios.get('/user/getUsers')
        return response
    } catch (e) {
        return e.response.data.error
    }
}

async function deletePokemoAxios(id){
    try{
        const response = await axios.delete(`/user/deleteUser/${id}`)
        return response
    }catch(e){
        return e.response.data.error
    }
}
