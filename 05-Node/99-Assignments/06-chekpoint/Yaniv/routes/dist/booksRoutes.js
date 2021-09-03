"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var _a = require('../../controllers/dist/booksControllers'), getAllBooks = _a.getAllBooks, postNewBook = _a.postNewBook, getSearchedBooks = _a.getSearchedBooks;
var _b = require('../../middlewares/dist/booksMiddlewares'), validateBody = _b.validateBody, doesBookExist = _b.doesBookExist;
var bookSchema = require('../../schemas/dist/bookSchema').bookSchema;
router
    .get('/all', getAllBooks)
    .post('', validateBody(bookSchema), doesBookExist, postNewBook)
    .get('', getSearchedBooks);
module.exports = router;
