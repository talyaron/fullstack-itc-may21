"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var bookControllers_1 = require("../controllers/bookControllers");
router.post('/addBook', bookControllers_1.addBook);
router.get('/getBooks', bookControllers_1.getBook);
router.put('/searchByTitle', bookControllers_1.searchByTitle);
module.exports = router;
// validateBook(schemaBook) ,isTitleExist,
