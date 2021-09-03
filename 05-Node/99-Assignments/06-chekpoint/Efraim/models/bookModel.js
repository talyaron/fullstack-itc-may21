var books = require('../models/models').books;
function searchWithRegExpTitle(searchTerm) {
    try {
        var userRegEx_1 = new RegExp(searchTerm, 'i');
        var searchResults = books.books.filter(function (books) { return userRegEx_1.test(books.name); });
        return searchResults;
    }
    catch (e) {
        console.error(e);
    }
}
function searchWithRegExpAuthor(searchTerm) {
    try {
        var userRegEx_2 = new RegExp(searchTerm, 'i');
        var searchResults = books.books.filter(function (books) { return userRegEx_2.test(books.author); });
        return searchResults;
    }
    catch (e) {
        console.error(e);
    }
}
function updateBooks(bookID, name, author) {
    try {
        var bookToUpdate = books.findBook(bookID);
        bookToUpdate.name = name;
        bookToUpdate.author = author;
    }
    catch (e) {
        console.error(e);
    }
}
module.exports = { searchWithRegExpTitle: searchWithRegExpTitle, searchWithRegExpAuthor: searchWithRegExpAuthor, updateBooks: updateBooks };
