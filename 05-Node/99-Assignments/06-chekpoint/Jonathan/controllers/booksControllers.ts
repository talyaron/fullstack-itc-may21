export { };

import { Books } from '../models/booksModel'

const books = new Books()

export function addBooks(req, res) {
    try {
        books.addBook(req.book)
        res.send({ message: "Book Added" })
    } catch (e) {
        res.status(500).send({ message: 'Something went wrong' })
    }
}

export function getBooks(req, res) {
    try {
        res.send({ books: books })
    } catch (e) {
        res.status(500).send({ message: 'Something went wrong' })
    }
}

export function searchByTitle(req, res) {
    try {
        const { searchTitle } = req.body
        if (!searchTitle) throw new Error('There is nothing on the body')
        const findBooksByTitle = books.searchBooksByTitle(searchTitle)
        res.send({ books: findBooksByTitle })
    } catch (e) {
        res.status(500).send({ error: `${e}` })
    }
}

export function deleteBook(req, res) {
    try {
        const { id } = req.params
        books.deleteBook(id)
        res.send({ books: books })
    } catch (e) {
        res.status(500).send({ error: `${e}` })
    }
}