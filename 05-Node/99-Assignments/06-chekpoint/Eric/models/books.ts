
const fs = require("fs");
const path = require("path");
const { v4: uuidv4} = require("uuid")
const allBooksJSON = path.resolve(__dirname, "./data/books.json");

export const readAllBooks = () => {
    const allBooks = fs.readFileSync(allBooksJSON);
    return JSON.parse(allBooks);
}

export class Book{
    id: string;
    title:string;
    author: string;
    
    constructor(title:string, author:string){
        this.id = uuidv4();    
        this.title = title;
        this.author = author;
    }

}

export class Books{
    books:Array<Book> 

    constructor(){
        this.books = readAllBooks()
    };

    addBook(book:Book){
        this.books.push(book)
        this.writeAllBooks()
    }  

    writeAllBooks() {
        fs.writeFileSync(allBooksJSON, JSON.stringify(this.books));
    }
 
    searchBooksByTitle(title:string){
        
        
            const regrExp: string = `^${title}`
            const searchTermReg: RegExp = new RegExp(regrExp, "i")
            
            const booksFoundByTitle = this.books.filter(book => searchTermReg.test(book.title))
            return booksFoundByTitle
    
        
    
    }
 
  
}


