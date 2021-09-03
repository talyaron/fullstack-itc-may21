export { };
const jwt = require('jwt-simple');
require('dotenv').config();

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


// export function searchBooks(req, res) {


//     try {
//         const allBooks = new Books();
//         const regEx: string = searchUser.value;
//         const searching: RegExp = new RegExp(regEx, 'gmi');


//         const usersFiltered = allBooks.filter(book=> searching.test(book.));

//     } catch (error) {
        
//     }
// }
