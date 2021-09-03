"use strict";
exports.__esModule = true;
exports.getSearchedBooks = exports.postNewBook = exports.getAllBooks = void 0;
var secret = require('../../secret/dist/secret').secret;
var jwt = require('jsonwebtoken');
var _a = require('../../models/dist/booksModel'), Book = _a.Book, Books = _a.Books;
function getAllBooks(req, res) {
    try {
        var allBooks = new Books();
        var books = (allBooks.books.length === 0) ? "Your books list is empty. You should really read more..." : allBooks.books;
        res.send({ books: books });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getAllBooks = getAllBooks;
function postNewBook(req, res) {
    try {
        var allBooks = new Books();
        var _a = req.body, title = _a.title, author = _a.author;
        var bookUuid = allBooks.addBook(title, author);
        var newestBookUuidToken = jwt.sign({ bookUuid: bookUuid }, secret, { expiresIn: 1800 });
        res.cookie('newestBookUuid', newestBookUuidToken, { maxAge: 1800000, httpOnly: true });
        res.send(allBooks.books);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.postNewBook = postNewBook;
function getSearchedBooks(req, res) {
    try {
        var allBooks = new Books();
        var _a = req.query, title = _a.title, author = _a.author;
        var searchedBooks = allBooks.searchBooks(title, author);
        var books = (searchedBooks.length === 0) ? "No books found \uD83D\uDC41\u200D\uD83D\uDDE8" : searchedBooks;
        res.send({ books: books });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getSearchedBooks = getSearchedBooks;
