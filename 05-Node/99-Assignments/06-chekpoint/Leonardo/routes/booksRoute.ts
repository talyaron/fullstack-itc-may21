export { };
const express = require('express');
const router = express.Router();

//I import the function of the Controlers that Im going to use here
import { addNewBook, getAllBooks, deleteBook, editBook, searchingBook } from '../controllers/bookController';
import { validateBody } from '../middleware/validateBody';
import { setCookie } from '../middleware/bookCookie';
import { doesBookExist } from '../middleware/doesBookExist';
const Schemas = require('../schemas/allSchemas');

router.get('/allBooks', getAllBooks);
router.post('/newBook', doesBookExist, validateBody(Schemas.registerSchemaFJS), setCookie, addNewBook);
router.delete('/deleteBook/:bookId', deleteBook);
router.put('/updateBook/:bookId', validateBody(Schemas.registerSchemaFJS), editBook);
router.post('/searchBook/:regEx', searchingBook)

module.exports = router;