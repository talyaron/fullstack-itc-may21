"use strict";
exports.__esModule = true;
exports.BooksList = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(name, author) {
        this.id = Math.random().toString(16);
        this.name = name;
        this.author = author;
    }
    return Book;
}());
exports.Book = Book;
var BooksList = /** @class */ (function () {
    function BooksList() {
        this.booksArray = [];
    }
    BooksList.prototype.addUser = function (newBook) {
        this.booksArray.push(newBook);
    };
    return BooksList;
}());
exports.BooksList = BooksList;
