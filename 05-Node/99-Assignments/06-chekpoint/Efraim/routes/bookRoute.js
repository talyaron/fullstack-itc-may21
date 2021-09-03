const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const schemas = require('../schemas/schemas');

const {
    validateBody,
    createToken
} = require('../middleware/middleware');


router.post('/addBook',
    validateBody(schemas.addBookAJV),
    createToken,
    bookController.addBook
)
router.post('/searchBookTitle',
    validateBody(schemas.searchBookAJV),
    bookController.searchBookTitle
)
router.post('/searchBookAuthor',
    validateBody(schemas.searchBookAJV),
    bookController.searchBookAuthor
)
router.get('/getAllBooks',
    bookController.getAllBooks    
)
router.delete(
    '/deleteBooks/:bookID',
    bookController.deleteBooks
)
router.put(
    '/updateBook',
    validateBody(schemas.addBookAJV),
    bookController.updateBook
)

module.exports = router;