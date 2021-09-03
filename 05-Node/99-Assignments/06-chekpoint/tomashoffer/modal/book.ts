export { };
const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const pathToBookJson = path.resolve(__dirname, '../db/book.json')

export function readAllBooks(){
    const allBooks = fs.readFileSync(pathToBookJson);
    return JSON.parse(allBooks);
  };
  
  export class Book{
    title:string;
    author:string;
    id: string
    constructor(title: string, author: string, id: string) {
        (this.title = title), 
        (this.author = author), 
        (this.id = id);
      }
}

export class BooksMethods {
    books: Array<Book>;

    constructor() {
        this.books = readAllBooks();
    }

    updateBookJson() {
        try {
            fs.writeFileSync(pathToBookJson, JSON.stringify(this.books));
        } catch (error) {
            console.error(error);
        }
    }

    createBook(book) {
        try {
            this.books.push(book);
            this.updateBookJson();
        }
        catch (error) {
            console.error(error);
        }
    }

    deleteBook(id) {
        try {
            this.books = this.books.filter(books => books.id !== id);
            this.updateBookJson();
        } catch (error) {
            console.error(error);
        }
    }
}