"use strict";
exports.__esModule = true;
exports.bookAddedCookie = void 0;
var jwt = require('jwt-simple');
require('dotenv').config();
function bookAddedCookie(req, res, next) {
    var book = (req.body.title, req.body.author);
    var cookie = book;
    var token = jwt.encode(cookie, process.env.SECRET_KEY);
    ;
    res.cookie('lastBookAdded', token, { maxAge: 900000000000, httpOnly: true });
    next();
}
exports.bookAddedCookie = bookAddedCookie;
;
