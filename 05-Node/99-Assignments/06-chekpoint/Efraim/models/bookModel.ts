const { Book, books } = require('../models/models')

function searchWithRegExpTitle(searchTerm) {
    try{
        const userRegEx: RegExp = new RegExp(searchTerm, 'i');
        const searchResults: Array<Book> = books.books.filter(books => userRegEx.test(books.name));
        return searchResults
    }catch (e) {
        console.error(e)
    }
}

function searchWithRegExpAuthor(searchTerm) {
    try{
        const userRegEx: RegExp = new RegExp(searchTerm, 'i');
        const searchResults: Array<Book> = books.books.filter(books => userRegEx.test(books.author));
        return searchResults
    }catch (e) {
        console.error(e)
    }
}

function updateBooks(bookID, name, author) {
    try{
        const bookToUpdate: Book = books.findBook(bookID)
        bookToUpdate.name = name
        bookToUpdate.author = author
    }catch (e) {
        console.error(e)
    }
}

module.exports = { searchWithRegExpTitle, searchWithRegExpAuthor, updateBooks }