"use strict";
exports.__esModule = true;
exports.isTitleExist = void 0;
var books_1 = require("../models/books");
var books = new books_1.Books();
function isTitleExist(req, res, next) {
    try {
        if (books !== undefined)
            next();
    }
    catch (error) {
    }
}
exports.isTitleExist = isTitleExist;
