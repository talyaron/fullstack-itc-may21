"use strict";
exports.__esModule = true;
exports.doesBookExist = void 0;
var booksModel_1 = require("../models/booksModel");
function doesBookExist(req, res, next) {
    try {
        var _a = req.body, bookname = _a.bookname, author = _a.author;
        //Get all books to see if the book already exist (by name or author)
        var allBooks = new booksModel_1.Books();
        var bookExist = allBooks.findBookByNameAndAuthor(bookname, author);
        if (bookExist) {
            res.status(400).send('Book already exist');
            return;
        }
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.doesBookExist = doesBookExist;
