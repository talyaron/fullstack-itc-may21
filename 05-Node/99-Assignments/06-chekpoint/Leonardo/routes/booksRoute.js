"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Controlers that Im going to use here
var bookController_1 = require("../controllers/bookController");
var validateBody_1 = require("../middleware/validateBody");
var bookCookie_1 = require("../middleware/bookCookie");
var doesBookExist_1 = require("../middleware/doesBookExist");
var Schemas = require('../schemas/allSchemas');
router.get('/allBooks', bookController_1.getAllBooks);
router.post('/newBook', doesBookExist_1.doesBookExist, validateBody_1.validateBody(Schemas.registerSchemaFJS), bookCookie_1.setCookie, bookController_1.addNewBook);
router["delete"]('/deleteBook/:bookId', bookController_1.deleteBook);
router.put('/updateBook/:bookId', validateBody_1.validateBody(Schemas.registerSchemaFJS), bookController_1.editBook);
router.post('/searchBook/:regEx', bookController_1.searchingBook);
module.exports = router;
