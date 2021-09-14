"use strict";
exports.__esModule = true;
exports.Books = exports.Book = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var booksJsonPath = path.resolve(__dirname, "./books.json");
//Function to read the JSON of created users
var readJsonBooks = function () {
    try {
        var books = fs.readFileSync(booksJsonPath);
        return JSON.parse(books);
    }
    catch (error) {
        console.error(error);
    }
};
var Book = /** @class */ (function () {
    function Book(bookName, bookAuth) {
        this.id = uuidv4();
        this.bookName = bookName;
        this.bookAuth = bookAuth;
    }
    return Book;
}());
exports.Book = Book;
var Books = /** @class */ (function () {
    function Books() {
        this.books = readJsonBooks();
    }
    Books.prototype.updateBooksJson = function () {
        try {
            fs.writeFileSync(booksJsonPath, JSON.stringify(this.books));
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.addNewBook = function (book) {
        try {
            this.books.push(book);
            this.updateBooksJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.searchBooks = function (name) {
        var regrExp = "^" + name;
        var searchTermReg = new RegExp(regrExp, "i");
        var booksFound = this.books.filter(function (book) {
            return searchTermReg.test(book.bookName);
        });
        return booksFound;
    };
    return Books;
}());
exports.Books = Books;
