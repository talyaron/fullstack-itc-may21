export { };
const express = require('express');
const router = express.Router();


import { addNewBook, getAllBooks } from '../controllers/bookController';
import { validateBody } from '../middleware/validateBody';
import{writeBookCookie} from '../middleware/cookie'
const Schemas = require("../schemas/bookSchemas");

router.get('/allBooks', getAllBooks);
router.post('/newBook', validateBody(Schemas.bookAddSchemaFJS),writeBookCookie, addNewBook);



module.exports = router;