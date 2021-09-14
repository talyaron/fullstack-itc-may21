"use strict";
exports.__esModule = true;
exports.setCookie = void 0;
var booksModel_1 = require("../models/booksModel");
var jwt = require('jwt-simple');
require('dotenv').config();
function setCookie(req, res, next) {
    try {
        //Get the information from the body and from the middleware
        var _a = req.body, bookname = _a.bookname, author = _a.author, year = _a.year;
        var allBooks = new booksModel_1.Books();
        var book = allBooks.findBookByNameAndAuthor(bookname, author);
        //As when Im doing the register the book doesnt exist, I will create it so I will the UUID
        book = new booksModel_1.Book(bookname, author, year);
        //The cookie is only going to contain the ID of the book
        var cookieToWrite = JSON.stringify({ id: book.uuid });
        var token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
        //The cookie is going to expire in 30 minutes
        res.cookie("bookInfo", token, { maxAge: 1800000, httpOnly: true });
        req.book = book;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.setCookie = setCookie;
