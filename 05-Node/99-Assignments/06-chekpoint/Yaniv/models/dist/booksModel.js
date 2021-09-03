"use strict";
exports.__esModule = true;
exports.Books = exports.Book = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var booksJsonPath = path.resolve(__dirname, "../books.json");
var readBooksJson = function () {
    try {
        var users = fs.readFileSync(booksJsonPath);
        return JSON.parse(users);
    }
    catch (error) {
        console.error(error.message);
    }
};
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.bookUuid = uuidv4();
        this.createdDate = new Date();
        this.title = title;
        this.author = author;
    }
    return Book;
}());
exports.Book = Book;
var Books = /** @class */ (function () {
    function Books() {
        this.books = readBooksJson();
    }
    Books.prototype.updateBooksJson = function () {
        try {
            fs.writeFileSync(booksJsonPath, JSON.stringify(this.books));
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Books.prototype.addBook = function (title, author) {
        try {
            var book = new Book(title, author);
            var bookUuid = book.bookUuid;
            this.books.push(book);
            this.updateBooksJson();
            return bookUuid;
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.searchBooks = function (titleSearch, authorSearch) {
        try {
            var books = JSON.parse(JSON.stringify(this.books));
            var bookTitleRegEx_1 = new RegExp(titleSearch, 'gmi');
            var bookAuthorRegEx_1 = new RegExp(authorSearch, 'gmi');
            if ((titleSearch === '') && (authorSearch == '')) {
                return books;
            }
            if (titleSearch !== '') {
                books = books.filter(function (book) { return bookTitleRegEx_1.test(book.title); });
            }
            if (authorSearch !== '') {
                books = books.filter(function (book) { return bookAuthorRegEx_1.test(book.author); });
            }
            return books;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Books;
}());
exports.Books = Books;
