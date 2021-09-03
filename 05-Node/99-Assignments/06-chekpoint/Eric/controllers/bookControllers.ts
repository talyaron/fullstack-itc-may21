import {Book, Books} from '../models/books'


const books = new Books()


export function addBook(req, res){

    const {title, author} = req.body
    const book = new Book(title, author)
    books.addBook(book)
    res.send({books:books})
}

export function getBook(req, res){
    res.send({books:books})
}

export function searchByTitle(req, res){
    
    const {searchTitle} = req.body
    const findBooks = books.searchBooksByTitle(searchTitle)
    res.send({books:findBooks})    
}

