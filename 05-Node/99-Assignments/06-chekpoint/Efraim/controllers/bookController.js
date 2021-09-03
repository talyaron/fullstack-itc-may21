var _a = require('../models/models'), Book = _a.Book, books = _a.books;
var _b = require('../models/bookModel'), searchWithRegExpTitle = _b.searchWithRegExpTitle, searchWithRegExpAuthor = _b.searchWithRegExpAuthor, updateBooks = _b.updateBooks;
exports.addBook = function (req, res) {
    try {
        var body = req.body, token = req.token;
        var bookName = body.bookName, author = body.author;
        var newBook = new Book(bookName, author);
        books.addBook(newBook);
        res.send({ bookarray: books, token: token });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            error: error.message
        });
    }
};
exports.searchBookTitle = function (req, res) {
    try {
        var body = req.body;
        var searchTerm = body.searchTerm;
        var searchResults = searchWithRegExpTitle(searchTerm);
        res.send(searchResults);
    }
    catch (error) {
        console.log(error);
    }
};
exports.searchBookAuthor = function (req, res) {
    try {
        var body = req.body;
        var searchTerm = body.searchTerm;
        var searchResults = searchWithRegExpAuthor(searchTerm);
        res.send(searchResults);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllBooks = function (req, res) {
    try {
        res.send(books);
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteBooks = function (req, res) {
    try {
        var bookID_1 = req.params.bookID;
        var newBookList = books.books.filter(function (books) { return books.bookID != bookID_1; });
        books.books = newBookList;
        res.send(books);
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            error: error.message
        });
    }
};
exports.updateBook = function (req, res) {
    try {
        var body = req.body;
        var id = req.query.id;
        var bookName = body.bookName, author = body.author;
        updateBooks(id, bookName, author);
        res.send(books);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
