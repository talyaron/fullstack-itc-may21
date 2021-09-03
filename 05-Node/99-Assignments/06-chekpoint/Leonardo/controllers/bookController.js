"use strict";
exports.__esModule = true;
exports.searchingBook = exports.editBook = exports.deleteBook = exports.getAllBooks = exports.addNewBook = void 0;
//I import the classes (with Methods) of the Models that Im going to use here
var booksModel_1 = require("../models/booksModel");
function addNewBook(req, res) {
    try {
        var book = req.book;
        var allBooks = new booksModel_1.Books();
        allBooks.newBook(book);
        res.send({ message: "A new Book was added", allBooks: allBooks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.addNewBook = addNewBook;
function getAllBooks(req, res) {
    try {
        var allBooks = new booksModel_1.Books();
        res.send({ message: "Books founded", allBooks: allBooks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getAllBooks = getAllBooks;
function deleteBook(req, res) {
    try {
        var bookId = req.params.bookId;
        var allBooks = new booksModel_1.Books();
        allBooks.removeBook(bookId);
        res.send({ message: "Poof! Your book has been deleted!", allBooks: allBooks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.deleteBook = deleteBook;
function editBook(req, res) {
    try {
        var bookId = req.params.bookId;
        var _a = req.body, bookname = _a.bookname, author = _a.author, year = _a.year;
        var allBooks = new booksModel_1.Books();
        var bookFound = allBooks.findBookById(bookId);
        bookFound.bookname = bookname;
        bookFound.author = author;
        bookFound.year = year;
        allBooks.updateBooksJson();
        res.send({ message: "The book was updated!", allBooks: allBooks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.editBook = editBook;
function searchingBook(req, res) {
    try {
        var regEx = req.params.regEx;
        var searching = new RegExp(regEx, 'i');
        var allBooks = new booksModel_1.Books();
        var foundBook = allBooks.findingBook(searching);
        if (!foundBook) {
            res.send({ message: "The book was not founded!" });
        }
        else {
            res.send({ message: "The book was founded!", foundBook: foundBook });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.searchingBook = searchingBook;
