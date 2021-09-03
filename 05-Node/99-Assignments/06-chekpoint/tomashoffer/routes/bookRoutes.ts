export {};
// REQUIRES
const express = require("express");
const router = express.Router();

// CONTROLLERS
import { addBook, getBooks, searchBooks, deleteBooks } from "../controllers/bookController";
//MIDDLEWARES
import { schemaBook } from '../schema/schema';
import { validateBook } from '../middleware/validation';
import { bookAddedCookie } from '../middleware/cookieBook';


router.post('/addbook', validateBook(schemaBook), bookAddedCookie, addBook)
router.get('/getbook', getBooks)
router.post('/searchbook', searchBooks)
router.post('/delete/:id', deleteBooks)


module.exports = router;
