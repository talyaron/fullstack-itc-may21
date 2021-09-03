import { Book, Books } from '../models/booksModel'

const books = new Books()

export function isTitleExist(req, res, next) {
    try {
        const { title } = req.body;
        const bookExist: Book = books.findBookByTitle(title)
        if (bookExist) throw new Error('Book with that title already exists')
        next()
    } catch (e) {
        res.status(400).send({ error: `${e.message}` });
    }
}

export function isThereAnySpecialCharacter(req, res, next) {
    try {
        const { title, author } = req.body;
        const isFound: boolean = books.findSpecialCharacter(title, author)
        if (isFound) throw new Error('Check Author or Title, Special Characters not allowed')
        next()
    } catch (e) {
        res.status(400).send({ error: `${e.message}` });
    }
}
