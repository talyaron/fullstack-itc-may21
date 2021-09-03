"use strict";
exports.__esModule = true;
// REQUIRES
var express = require("express");
var router = express.Router();
// CONTROLLERS
var bookController_1 = require("../controllers/bookController");
//MIDDLEWARES
var schema_1 = require("../schema/schema");
var validation_1 = require("../middleware/validation");
var cookieBook_1 = require("../middleware/cookieBook");
router.post('/addbook', validation_1.validateBook(schema_1.schemaBook), cookieBook_1.bookAddedCookie, bookController_1.addBook);
router.get('/getbook', bookController_1.getBooks);
router.post('/searchbook', bookController_1.searchBooks);
router.post('/delete/:id', bookController_1.deleteBooks);
module.exports = router;
