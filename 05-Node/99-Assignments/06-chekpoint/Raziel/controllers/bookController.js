"use strict";
exports.__esModule = true;
exports.getAllBooks = exports.addNewBook = void 0;
var jwt = require('jwt-simple');
require('dotenv').config();
var bookModel_1 = require("../model/bookModel");
function addNewBook(req, res) {
    try {
        var _a = req.body, bookName = _a.bookName, bookAuth = _a.bookAuth;
        var book = new bookModel_1.Book(bookName, bookAuth);
        var allBooks = new bookModel_1.Books();
        allBooks.addNewBook(book);
        res.send({ message: "A book was added to your library", allBooks: allBooks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.addNewBook = addNewBook;
function getAllBooks(req, res) {
    try {
        var allBooks = new bookModel_1.Books();
        res.send({ message: "Books founded", allBooks: allBooks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getAllBooks = getAllBooks;
// export function searchBooks(req, res) {
//     try {
//         const allBooks = new Books();
//         const regEx: string = searchUser.value;
//         const searching: RegExp = new RegExp(regEx, 'gmi');
//         const usersFiltered = allBooks.filter(book=> searching.test(book.));
//     } catch (error) {
//     }
// }
