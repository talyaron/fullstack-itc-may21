"use strict";
exports.__esModule = true;
exports.searchByTitle = exports.getBook = exports.addBook = void 0;
var books_1 = require("../models/books");
var books = new books_1.Books();
function addBook(req, res) {
    var _a = req.body, title = _a.title, author = _a.author;
    var book = new books_1.Book(title, author);
    books.addBook(book);
    res.send({ books: books });
}
exports.addBook = addBook;
function getBook(req, res) {
    res.send({ books: books });
}
exports.getBook = getBook;
function searchByTitle(req, res) {
    var searchTitle = req.body.searchTitle;
    var findBooks = books.searchBooksByTitle(searchTitle);
    res.send({ books: findBooks });
}
exports.searchByTitle = searchByTitle;
