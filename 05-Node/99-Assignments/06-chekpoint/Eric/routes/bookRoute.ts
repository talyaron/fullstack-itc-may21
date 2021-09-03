const express = require('express');

const router = express.Router();

import {addBook, getBook, searchByTitle} from '../controllers/bookControllers'
// import {isTitleExist} from '../middleware/validationModel'
// import {validateBook} from '../middleware/validationSchemas'
import { schemaBook } from '../schemas/allSchemas';

router.post('/addBook',  addBook);
router.get('/getBooks', getBook)
router.put('/searchByTitle', searchByTitle)




module.exports = router

// validateBook(schemaBook) ,isTitleExist,