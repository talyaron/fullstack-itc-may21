"use strict";
exports.__esModule = true;
exports.writeCookie = void 0;
var books_1 = require("../models/books");
var secret_1 = require("./secret/secret");
var jwt = require('jwt-simple');
function writeCookie(req, res, next) {
    try {
        var _a = req.body, title = _a.title, author = _a.author;
        var book = new books_1.Book(title, author);
        var id = JSON.stringify({ id: book.id });
        var tokenBook = jwt.encode(id, secret_1.secret);
        res.cookie('cookieBook', tokenBook, { maxAge: 3000000000, httpOnly: true });
        req.book = book;
        next();
    }
    catch (e) {
        alert(e);
    }
}
exports.writeCookie = writeCookie;
