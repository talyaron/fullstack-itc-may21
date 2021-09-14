const express = require('express');
const router = express.Router();

import { addBooks, getBooks, searchByTitle, deleteBook } from '../controllers/booksControllers'

import { writeCookie } from '../middleware/handleCookie'

import { validateBook, validateSearch } from '../middleware/validationSchema'
import { isTitleExist, isThereAnySpecialCharacter } from '../middleware/validationJSON'

import { schemaBooks, schemaSearchBook } from '../schema/allSchemas'

router.post('/addBooks', validateBook(schemaBooks), isThereAnySpecialCharacter, isTitleExist, writeCookie, addBooks)
      .get('/getBooks', getBooks)
      .put('/searchByTitle', validateSearch(schemaSearchBook), searchByTitle)
      .delete('/deleteBook/:id', deleteBook)

module.exports = router
