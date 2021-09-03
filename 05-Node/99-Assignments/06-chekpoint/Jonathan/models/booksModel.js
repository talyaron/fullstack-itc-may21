"use strict";
exports.__esModule = true;
exports.Books = exports.Book = exports.readAllBooks = void 0;
var fs = require("fs");
var path = require("path");
var allBooksJSON = path.resolve(__dirname, "./data/books.json");
var uuidv4 = require("uuid").v4;
exports.readAllBooks = function () {
    try {
        var allBooks = fs.readFileSync(allBooksJSON);
        return JSON.parse(allBooks);
    }
    catch (e) {
        return e;
    }
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
    Books.prototype.addBook = function (book) {
        try {
            if (!book)
                throw new Error("No book founded");
            this.books.push(book);
            this.writeAllBooks();
        }
        catch (e) {
            return e;
        }
    };
    Books.prototype.deleteBook = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
        this.writeAllBooks();
    };
    Books.prototype.findBookByTitle = function (title) {
        try {
            if (!title)
                throw new Error("No title founded");
            var findBook = this.books.find(function (book) { return book.title === title; });
            return findBook;
        }
        catch (e) {
            return e;
        }
    };
    Books.prototype.findSpecialCharacter = function (title, author) {
        try {
            if (!title || !author)
                throw new Error("No title or author founded");
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            var isSpecialTitle = format.test(title);
            var isSpecialAuthor = format.test(author);
            return (isSpecialTitle || isSpecialAuthor);
        }
        catch (e) {
            return e;
        }
    };
    Books.prototype.searchBooksByTitle = function (title) {
        try {
            if (!title)
                throw new Error("No title founded");
            var regrExp = "" + title;
            var searchTermReg_1 = new RegExp(regrExp, 'i');
            var booksFounded = this.books.filter(function (books) { return searchTermReg_1.test(books.title); });
            return booksFounded;
        }
        catch (e) {
            return e;
        }
    };
    Books.prototype.writeAllBooks = function () {
        try {
            fs.writeFileSync(allBooksJSON, JSON.stringify(this.books));
        }
        catch (e) {
            return e;
        }
    };
    return Books;
}());
exports.Books = Books;
