"use strict";
exports.__esModule = true;
exports.deleteBook = exports.searchByTitle = exports.getBooks = exports.addBooks = void 0;
var booksModel_1 = require("../models/booksModel");
var books = new booksModel_1.Books();
function addBooks(req, res) {
    try {
        books.addBook(req.book);
        res.send({ message: "Book Added" });
    }
    catch (e) {
        res.status(500).send({ message: 'Something went wrong' });
    }
}
exports.addBooks = addBooks;
function getBooks(req, res) {
    try {
        res.send({ books: books });
    }
    catch (e) {
        res.status(500).send({ message: 'Something went wrong' });
    }
}
exports.getBooks = getBooks;
function searchByTitle(req, res) {
    try {
        var searchTitle = req.body.searchTitle;
        if (!searchTitle)
            throw new Error('There is nothing on the body');
        var findBooksByTitle = books.searchBooksByTitle(searchTitle);
        res.send({ books: findBooksByTitle });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.searchByTitle = searchByTitle;
function deleteBook(req, res) {
    try {
        var id = req.params.id;
        books.deleteBook(id);
        res.send({ books: books });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.deleteBook = deleteBook;
