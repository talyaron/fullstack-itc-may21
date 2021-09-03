"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var booksController_1 = require("../controllers/booksController");
var schema_1 = require("../schemas/schema");
var validateBody_1 = require("../middleware/validateBody");
var sendCookie_1 = require("../middleware/sendCookie");
router
    .get('/allBooks', booksController_1.get_books)
    .post('/addBook', validateBody_1.validateBody(schema_1.userSchemaAJV), sendCookie_1.sendCookie, booksController_1.add_book)
    .post('/searchBooks', booksController_1.search_books);
module.exports = router;
