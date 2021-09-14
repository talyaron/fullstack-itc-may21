"use strict";

var express = require('express');

var router = express.Router();

var bookController = require('../controllers/bookController');

var schemas = require('../schemas/schemas');

var _require = require('../middleware/middleware'),
    validateBody = _require.validateBody,
    createToken = _require.createToken;

router.post('/addBook', validateBody(schemas.addBookAJV), createToken, bookController.addBook);
router.post('/searchBookTitle', validateBody(schemas.searchBookAJV), bookController.searchBookTitle);
router.post('/searchBookAuthor', validateBody(schemas.searchBookAJV), bookController.searchBookAuthor);
router.get('/getAllBooks', bookController.getAllBooks);
router["delete"]('/deleteBooks/:bookID', bookController.deleteBooks);
router.put('/updateBook', validateBody(schemas.addBookAJV), bookController.updateBook);
module.exports = router;