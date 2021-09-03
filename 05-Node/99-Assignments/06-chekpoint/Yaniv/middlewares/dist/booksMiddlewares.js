"use strict";
exports.__esModule = true;
exports.doesBookExist = exports.validateBody = void 0;
var Ajv = require("ajv");
var ajv = new Ajv();
var addFormats = require("ajv-formats");
addFormats(ajv);
var _a = require("../../models/dist/booksModel"), Book = _a.Book, Books = _a.Books;
function validateBody(schema) {
    try {
        return function (req, res, next) {
            try {
                var valid = ajv.validate(schema, req.body);
                if (!valid) {
                    res.status(409).send('Something is not right with the data you entered. Please verify and try again.'); // ajv.errors[0]["message"]
                    return;
                }
                next();
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);
            }
        };
    }
    catch (error) {
        console.error(error.message);
    }
}
exports.validateBody = validateBody;
function doesBookExist(req, res, next) {
    try {
        var books = new Books();
        var _a = req.body, title = _a.title, author = _a.author;
        var similarBooks = books.searchBooks(title, author);
        if (similarBooks.length > 0)
            res.status(409).send({ message: "Book already exist. Can't proceed." });
        else
            next();
        return;
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
}
exports.doesBookExist = doesBookExist;
