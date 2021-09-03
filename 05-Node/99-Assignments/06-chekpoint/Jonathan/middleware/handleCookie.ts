import { Book } from '../models/booksModel'

import { secret } from './secret/secret';

const jwt = require('jwt-simple');

export function writeCookie(req, res, next) {
    try {
        const { title, author } = req.body;
        const book = new Book(title, author)
        const idBook = JSON.stringify({ id: book.id })
        const tokenBook: string = jwt.encode(idBook, secret)
        res.cookie('cookieBook', tokenBook, { maxAge: 3000000000, httpOnly: true })
        if (!res.cookie) throw new Error('No cookie was saved')
        req.book = book
        next()
    } catch (e) {
        return e
    }
}