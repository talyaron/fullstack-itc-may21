export { };
import { Book, BooksMethods, readAllBooks } from "../modal/book";
const jwt = require('jwt-simple');
require('dotenv').config();

export function bookAddedCookie(req, res, next) {
      const book = (req.body.title, req.body.author);
      const cookie = book;  
      const token = jwt.encode(cookie, process.env.SECRET_KEY);;
      res.cookie('lastBookAdded', token, { maxAge: 900000000000, httpOnly: true });
    next();
  };
