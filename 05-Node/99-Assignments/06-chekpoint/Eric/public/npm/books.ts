async function addBookAxios(newBook) {
    try {
        const response = await axios.post('/book/addBook', newBook);
        return response.data
    } catch (error) {
        return error.response.data.error
    }

}

async function getBooksAxios() {
    const response = await axios.get('/book/getBooks')
    return response
}

async function searchByTitleAxios(searchTitle) {
    const response = await axios.put('/book/searchBytitle', searchTitle)
    return response
}

