"use strict";
exports.__esModule = true;
exports.search_books = exports.add_book = exports.get_books = void 0;
var booksModel_1 = require("../models/booksModel");
var books = new booksModel_1.BooksList();
exports.get_books = function (req, res) {
    res.send({ books: books.booksArray });
};
exports.add_book = function (req, res) {
    try {
        var _a = req.body, name = _a.name, author = _a.author;
        if (!name || !author)
            throw new Error('Missing input');
        var newBook = new booksModel_1.Book(name, author);
        books.addUser(newBook);
        console.log('Added book:', newBook);
        res.send({ books: books.booksArray });
    }
    catch (error) {
        console.error(error);
    }
};
exports.search_books = function (req, res) {
    try {
        var searchTerm = req.body.search;
        console.log('Search input: ' + searchTerm);
        var searchTermRegex_1 = new RegExp(searchTerm, 'gmi');
        var results = books.booksArray.filter(function (book) {
            return searchTermRegex_1.test(book.name || book.author);
        });
        console.log('Results: ', results);
        res.send({ results: results });
    }
    catch (error) {
        console.error(error);
    }
    ;
};
