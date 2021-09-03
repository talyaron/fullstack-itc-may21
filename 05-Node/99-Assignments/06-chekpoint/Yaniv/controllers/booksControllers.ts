export {};

const { secret } = require('../../secret/dist/secret');
const jwt = require('jsonwebtoken');
const { Book, Books } = require('../../models/dist/booksModel');

export function getAllBooks(req, res) {
    try {
        const allBooks = new Books();
        const books = (allBooks.books.length === 0) ? `Your books list is empty. You should really read more...` : allBooks.books;

        res.send({ books });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function postNewBook(req, res) {
    try {
        const allBooks = new Books();
        const { title, author } = req.body;

        const bookUuid: string = allBooks.addBook(title, author);

        const newestBookUuidToken: any = jwt.sign({ bookUuid }, secret, { expiresIn: 1800 });
        res.cookie('newestBookUuid', newestBookUuidToken, { maxAge: 1800000, httpOnly: true });

        res.send(allBooks.books);

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function getSearchedBooks(req, res) {
    try {
        const allBooks = new Books();
        const { title, author } = req.query;

        const searchedBooks = allBooks.searchBooks(title, author);

        const books = (searchedBooks.length === 0) ? `No books found 👁‍🗨` : searchedBooks; 

        res.send({ books });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}