const express = require('express');
const router = express.Router();
import { get_books, add_book, search_books } from '../controllers/booksController';
import { userSchemaAJV } from '../schemas/schema';
import { validateBody } from '../middleware/validateBody';
import { sendCookie } from '../middleware/sendCookie';


router
    .get('/allBooks', get_books)
    .post('/addBook', validateBody(userSchemaAJV), sendCookie, add_book)
    .post('/searchBooks', search_books)

module.exports = router