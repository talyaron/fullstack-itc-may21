import { Book } from '../models/books'

import { secret } from './secret/secret';

const jwt = require('jwt-simple');

export function writeCookie(req, res, next) {
    try {
        const { title,author} = req.body;
        const book = new Book(title, author)
        const id = JSON.stringify({ id: book.id })
        const tokenBook = jwt.encode(id, secret)
        res.cookie('cookieBook', tokenBook, { maxAge: 3000000000, httpOnly: true })
        req.book = book
        next()
    } catch (e) {
        alert(e)
    }
}