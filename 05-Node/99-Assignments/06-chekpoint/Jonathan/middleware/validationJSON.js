"use strict";
exports.__esModule = true;
exports.isThereAnySpecialCharacter = exports.isTitleExist = void 0;
var booksModel_1 = require("../models/booksModel");
var books = new booksModel_1.Books();
function isTitleExist(req, res, next) {
    try {
        var title = req.body.title;
        var bookExist = books.findBookByTitle(title);
        if (bookExist)
            throw new Error('Book with that title already exists');
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message });
    }
}
exports.isTitleExist = isTitleExist;
function isThereAnySpecialCharacter(req, res, next) {
    try {
        var _a = req.body, title = _a.title, author = _a.author;
        var isFound = books.findSpecialCharacter(title, author);
        if (isFound)
            throw new Error('Check Author or Title, Special Characters not allowed');
        next();
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message });
    }
}
exports.isThereAnySpecialCharacter = isThereAnySpecialCharacter;
