export {};
import { Book, BooksMethods, readAllBooks } from "../modal/book";
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");
const methodBook = new BooksMethods()
const allBooks = readAllBooks();


export function addBook(req: any, res: any) { 
    try{
        const id = uuidv4(); 
        const book = new Book(req.body.title, req.body.author, id);
        methodBook.createBook(book);
        res.send({ok:'book added successfully'});
    }catch(e){
        console.error(e);
    }
}

export function getBooks(req: any, res: any){
    res.send(allBooks);
}

export function searchBooks(req: any, res: any){
    const {searchBar} = req.body;
    const upperCase = searchBar.toUpperCase();
    console.log(upperCase);

        const regExp = `^${upperCase}`;
        const searchTermReg= new RegExp(regExp, 'g');  
        const search = allBooks.filter(elem => searchTermReg.test(elem.title));
        console.log(search);
        res.send(search);
    }

    export function deleteBooks(req: any, res: any){
        const { id } = req.params;
        methodBook.deleteBook(id)
        res.send({"ok":'success delete'})
    }

    