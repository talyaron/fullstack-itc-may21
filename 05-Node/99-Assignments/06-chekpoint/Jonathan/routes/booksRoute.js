"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var booksControllers_1 = require("../controllers/booksControllers");
var handleCookie_1 = require("../middleware/handleCookie");
var validationSchema_1 = require("../middleware/validationSchema");
var validationJSON_1 = require("../middleware/validationJSON");
var allSchemas_1 = require("../schema/allSchemas");
router.post('/addBooks', validationSchema_1.validateBook(allSchemas_1.schemaBooks), validationJSON_1.isThereAnySpecialCharacter, validationJSON_1.isTitleExist, handleCookie_1.writeCookie, booksControllers_1.addBooks)
    .get('/getBooks', booksControllers_1.getBooks)
    .put('/searchByTitle', validationSchema_1.validateSearch(allSchemas_1.schemaSearchBook), booksControllers_1.searchByTitle)["delete"]('/deleteBook/:id', booksControllers_1.deleteBook);
module.exports = router;
