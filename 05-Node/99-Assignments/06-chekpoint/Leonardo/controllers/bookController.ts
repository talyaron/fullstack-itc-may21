export { };

//I import the classes (with Methods) of the Models that Im going to use here
import { Book, Books } from "../models/booksModel";

export function addNewBook(req, res) {
    try {
        const book = req.book;
        const allBooks = new Books();
        allBooks.newBook(book);
        res.send({ message: "A new Book was added", allBooks });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message)
    }
}

export function getAllBooks(req, res) {
    try {
        const allBooks = new Books();
        res.send({ message: "Books founded", allBooks });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message)
    }
}

export function deleteBook(req, res) {
    try {
        const { bookId } = req.params;
        const allBooks = new Books();
        allBooks.removeBook(bookId);
        res.send({ message: "Poof! Your book has been deleted!", allBooks });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function editBook(req, res) {
    try {
        const { bookId } = req.params;
        const { bookname, author, year } = req.body;
        const allBooks = new Books();
        const bookFound = allBooks.findBookById(bookId);
        bookFound.bookname = bookname;
        bookFound.author = author;
        bookFound.year = year;
        allBooks.updateBooksJson();
        res.send({ message: "The book was updated!", allBooks });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function searchingBook(req, res) {
    try {
        const { regEx } = req.params;
        const searching: RegExp = new RegExp(regEx, 'i');
        const allBooks = new Books();
        const foundBook = allBooks.findingBook(searching);
        if (!foundBook) {
            res.send({ message: "The book was not founded!" });
        } else {
            res.send({ message: "The book was founded!", foundBook });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}