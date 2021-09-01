async function addUserAxios(newUser) {
    try {
        const response = await axios.post('/user/addUser', newUser);
        return response.data
    } catch (error) {
        return error.response.data.error
    }

}

async function getUsersAxios() {
    const response = await axios.get('/user/getUsers')
    return response
}

