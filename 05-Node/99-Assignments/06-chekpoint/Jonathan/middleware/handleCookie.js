"use strict";
exports.__esModule = true;
exports.writeCookie = void 0;
var booksModel_1 = require("../models/booksModel");
var secret_1 = require("./secret/secret");
var jwt = require('jwt-simple');
function writeCookie(req, res, next) {
    try {
        var _a = req.body, title = _a.title, author = _a.author;
        var book = new booksModel_1.Book(title, author);
        var idBook = JSON.stringify({ id: book.id });
        var tokenBook = jwt.encode(idBook, secret_1.secret);
        res.cookie('cookieBook', tokenBook, { maxAge: 3000000000, httpOnly: true });
        if (!res.cookie)
            throw new Error('No cookie was saved');
        req.book = book;
        next();
    }
    catch (e) {
        return e;
    }
}
exports.writeCookie = writeCookie;
