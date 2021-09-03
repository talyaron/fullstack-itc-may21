"use strict";
exports.__esModule = true;
exports.writeBookCookie = void 0;
var bookModel_1 = require("../model/bookModel");
var jwt = require('jsonwebtoken');
require('dotenv').config();
function writeBookCookie(req, res, next) {
    if (!res.cookie.cookiUser) {
        var _a = req.body, bookName = _a.bookName, bookAuth = _a.bookAuth;
        var book = new bookModel_1.Book(bookName, bookAuth);
        console.log(process.env.SECRET_KEY);
        var tokenUser = jwt.sign({ id: book.id }, process.env.SECRET_KEY);
        console.log(tokenUser);
        res.cookie('cookieBook', tokenUser, { maxAge: 3000000, httpOnly: true });
        req.book = book;
        next();
    }
    else {
        res.status(400).send({ message: 'I have already a cookie' });
    }
}
exports.writeBookCookie = writeBookCookie;
