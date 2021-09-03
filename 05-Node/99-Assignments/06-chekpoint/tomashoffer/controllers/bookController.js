"use strict";
exports.__esModule = true;
exports.deleteBooks = exports.searchBooks = exports.getBooks = exports.addBook = void 0;
var book_1 = require("../modal/book");
var uuidv4 = require("uuid").v4;
var cookieParser = require("cookie-parser");
var methodBook = new book_1.BooksMethods();
var allBooks = book_1.readAllBooks();
function addBook(req, res) {
    try {
        var id = uuidv4();
        var book = new book_1.Book(req.body.title, req.body.author, id);
        methodBook.createBook(book);
        res.send({ ok: 'book added successfully' });
    }
    catch (e) {
        console.error(e);
    }
}
exports.addBook = addBook;
function getBooks(req, res) {
    res.send(allBooks);
}
exports.getBooks = getBooks;
function searchBooks(req, res) {
    var searchBar = req.body.searchBar;
    var upperCase = searchBar.toUpperCase();
    console.log(upperCase);
    var regExp = "^" + upperCase;
    var searchTermReg = new RegExp(regExp, 'g');
    var search = allBooks.filter(function (elem) { return searchTermReg.test(elem.title); });
    console.log(search);
    res.send(search);
}
exports.searchBooks = searchBooks;
function deleteBooks(req, res) {
    var id = req.params.id;
    methodBook.deleteBook(id);
    res.send({ "ok": 'success delete' });
}
exports.deleteBooks = deleteBooks;
