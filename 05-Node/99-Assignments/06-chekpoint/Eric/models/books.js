"use strict";
exports.__esModule = true;
exports.Books = exports.Book = exports.readAllBooks = void 0;
var fs = require("fs");
var path = require("path");
var uuidv4 = require("uuid").v4;
var allBooksJSON = path.resolve(__dirname, "./data/books.json");
exports.readAllBooks = function () {
    var allBooks = fs.readFileSync(allBooksJSON);
    return JSON.parse(allBooks);
};
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.id = uuidv4();
        this.title = title;
        this.author = author;
    }
    return Book;
}());
exports.Book = Book;
var Books = /** @class */ (function () {
    function Books() {
        this.books = exports.readAllBooks();
    }
    ;
    Books.prototype.addBook = function (book) {
        this.books.push(book);
        this.writeAllBooks();
    };
    Books.prototype.writeAllBooks = function () {
        fs.writeFileSync(allBooksJSON, JSON.stringify(this.books));
    };
    Books.prototype.searchBooksByTitle = function (title) {
        var regrExp = "^" + title;
        var searchTermReg = new RegExp(regrExp, "i");
        var booksFoundByTitle = this.books.filter(function (book) { return searchTermReg.test(book.title); });
        return booksFoundByTitle;
    };
    return Books;
}());
exports.Books = Books;
