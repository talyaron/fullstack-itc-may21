const { Book, books } = require('../models/models')
const { searchWithRegExpTitle, searchWithRegExpAuthor, updateBooks } = require('../models/bookModel')


exports.addBook = (req, res) =>{
    try {
        const {body, token} = req
        const {bookName, author} = body
        const newBook:Book = new Book(bookName, author)
        books.addBook(newBook)
        res.send({bookarray:books, token: token})

    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.message
        });
    }
}
exports.searchBookTitle = (req, res) =>{
    try {
        const {body} = req
        const {searchTerm} = body
        const searchResults: Array<Book> = searchWithRegExpTitle(searchTerm)
        res.send(searchResults)
    } catch (error) {
        console.log(error)
    }
}
exports.searchBookAuthor = (req, res) =>{
    try {
        const {body} = req
        const {searchTerm} = body
        const searchResults: Array<Book> = searchWithRegExpAuthor(searchTerm)
        res.send(searchResults)
    } catch (error) {
        console.log(error)
    }
}
exports.getAllBooks = (req, res) =>{
    try {
        res.send(books)
    } catch (error) {
        console.log(error)
    }
}
exports.deleteBooks = (req, res) =>{
    try {
        const { bookID } = req.params
        const newBookList: Array<Book> = books.books.filter(books => books.bookID != bookID)
        books.books = newBookList
        res.send(books)
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.message
        });
    }
}

exports.updateBook = (req, res) => {
    try {
        const { body } = req;
        const { id } = req.query
        const { bookName, author } = body
        updateBooks(id, bookName, author)
        res.send(books)
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}

