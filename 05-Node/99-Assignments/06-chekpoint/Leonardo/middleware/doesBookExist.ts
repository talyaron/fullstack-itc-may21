export { };

import { Books } from '../models/booksModel';

export function doesBookExist(req, res, next) {
    try {
        const { bookname, author } = req.body;
        //Get all books to see if the book already exist (by name or author)
        const allBooks = new Books();
        const bookExist = allBooks.findBookByNameAndAuthor(bookname, author);
        if (bookExist) {
            res.status(400).send('Book already exist');
            return;
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}