export { };
const express = require('express');
const router = express.Router();

const { getAllBooks, postNewBook, getSearchedBooks } = require('../../controllers/dist/booksControllers');
const { validateBody, doesBookExist } = require('../../middlewares/dist/booksMiddlewares');
const { bookSchema } = require('../../schemas/dist/bookSchema')

router
    .get('/all', getAllBooks)
    .post('', validateBody(bookSchema), doesBookExist, postNewBook)
    .get('', getSearchedBooks);

module.exports = router;