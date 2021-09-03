"use strict";
exports.__esModule = true;
exports.BooksMethods = exports.Book = exports.readAllBooks = void 0;
var fs = require("fs");
var path = require('path');
var uuidv4 = require("uuid").v4;
var pathToBookJson = path.resolve(__dirname, '../db/book.json');
function readAllBooks() {
    var allBooks = fs.readFileSync(pathToBookJson);
    return JSON.parse(allBooks);
}
exports.readAllBooks = readAllBooks;
;
var Book = /** @class */ (function () {
    function Book(title, author, id) {
        (this.title = title),
            (this.author = author),
            (this.id = id);
    }
    return Book;
}());
exports.Book = Book;
var BooksMethods = /** @class */ (function () {
    function BooksMethods() {
        this.books = readAllBooks();
    }
    BooksMethods.prototype.updateBookJson = function () {
        try {
            fs.writeFileSync(pathToBookJson, JSON.stringify(this.books));
        }
        catch (error) {
            console.error(error);
        }
    };
    BooksMethods.prototype.createBook = function (book) {
        try {
            this.books.push(book);
            this.updateBookJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    BooksMethods.prototype.deleteBook = function (id) {
        try {
            this.books = this.books.filter(function (books) { return books.id !== id; });
            this.updateBookJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    return BooksMethods;
}());
exports.BooksMethods = BooksMethods;
