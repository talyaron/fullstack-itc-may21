import { Book } from '../model/bookModel'

const jwt = require('jsonwebtoken');
require('dotenv').config();





export function writeBookCookie(req, res, next) {

    if(!res.cookie.cookiUser) {
        const { bookName,  bookAuth } = req.body;
        const book = new Book(bookName,  bookAuth);
        console.log(process.env.SECRET_KEY)
        const tokenUser = jwt.sign({ id: book.id }, process.env.SECRET_KEY);
        console.log(tokenUser)
        res.cookie('cookieBook', tokenUser, { maxAge: 3000000, httpOnly: true })
        req.book = book;
        next();
    }else{
        res.status(400).send({message:'I have already a cookie'})
    }


}