import { Book, Books } from "../models/booksModel";

export { };
const jwt = require('jwt-simple');
require('dotenv').config();

export function setCookie(req, res, next) {
    try {
        //Get the information from the body and from the middleware
        const { bookname, author, year } = req.body;
        const allBooks = new Books();
        let book = allBooks.findBookByNameAndAuthor(bookname, author);

        //As when Im doing the register the book doesnt exist, I will create it so I will the UUID
        book = new Book(bookname, author, year);

        //The cookie is only going to contain the ID of the book
        const cookieToWrite: string = JSON.stringify({ id: book.uuid });
        const token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
        //The cookie is going to expire in 30 minutes
        res.cookie("bookInfo", token, { maxAge: 1800000, httpOnly: true });
        req.book = book;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}