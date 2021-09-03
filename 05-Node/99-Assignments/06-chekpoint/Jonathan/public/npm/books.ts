async function addBooksAxios(newBook) {
    try {
        const response = await axios.post('/books/addBooks', newBook)
        return response
    } catch (e) {
        return e.response.data.error
    }
}

async function getAllBooksAxios() {
    try {
        const response = await axios.get('/books/getBooks')
        return response
    } catch (e) {
        return e.response.data.error
    }
}

async function searchByTitleAxios(searchTitle) {
    try {
        const response = await axios.put('/books/searchByTitle', searchTitle)
        return response
    } catch (e) {
        return e.response.data.error
    }
}

async function deleteBookAxios(id) {
    try {
        const response = await axios.delete(`/books/deleteBook/${id}`)
        return response
    } catch (e) {
        return e.response.data.error
    }
}