"use strict";
exports.__esModule = true;
exports.Books = exports.Book = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var booksJsonPath = path.resolve(__dirname, "./books.json");
//Function to read the JSON of created books
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
    function Book(bookname, author, year) {
        this.uuid = uuidv4();
        this.bookname = bookname;
        this.author = author;
        this.year = year;
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
    Books.prototype.newBook = function (book) {
        try {
            this.books.push(book);
            this.updateBooksJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.removeBook = function (id) {
        try {
            this.books = this.books.filter(function (book) { return book.uuid !== id; });
            this.updateBooksJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.findBookById = function (id) {
        try {
            var bookFound = this.books.find(function (book) { return book.uuid === id; });
            return bookFound;
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.findBookByNameAndAuthor = function (bookname, author) {
        try {
            var bookFound = this.books.find(function (book) { return book.bookname === bookname && book.author === author; });
            return bookFound;
        }
        catch (error) {
            console.error(error);
        }
    };
    Books.prototype.findingBook = function (searching) {
        try {
            var foundBook = this.books.filter(function (book) { return searching.test(book.bookname) || searching.test(book.author); });
            return foundBook;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Books;
}());
exports.Books = Books;
