export { };
const jwt = require('jwt-simple');

import { Book, Books } from "../model/bookModel";


export function addNewBook(req, res) {
    try {
        const { bookName,bookAuth } = req.body;
        const book = new Book(bookName, bookAuth);
        const allBooks = new Books();
        allBooks.addNewBook(book);
        res.send({ message: "A book was added to your library", allBooks });
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



export function searchBook(req, res){
    const books = new Books();

    const {searchName} = req.body
    const bookFound = books.searchBooks(searchName)
    res.send({books:bookFound})    
}
