export {};

const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const booksJsonPath = path.resolve(__dirname, "../books.json");

const readBooksJson = () => {
  try {
    const users: any = fs.readFileSync(booksJsonPath);
    return JSON.parse(users);
  } catch (error) {
    console.error(error.message);
  }
}

export class Book {
    bookUuid: string;
    createdDate: Date;
    title: string;
    author: string;
    
    constructor(title: string, author: string) {
        this.bookUuid = uuidv4();
        this.createdDate = new Date();
        this.title = title;
        this.author = author;
    }
}

export class Books {
    books: Array<Book>;

    constructor() {
        this.books = readBooksJson();
    }

    updateBooksJson() {
        try {
            fs.writeFileSync(booksJsonPath, JSON.stringify(this.books));
        } catch (error) {
            console.error(error.message);
        }
    }

    addBook(title: string, author: string): string {
        try {
            const book = new Book(title, author);
            const bookUuid: string = book.bookUuid;        

            this.books.push(book);
            
            this.updateBooksJson();

            return bookUuid;

        } catch (error) {
            console.error(error);
        }
    }

    searchBooks(titleSearch: string, authorSearch: string) {
        try {
            
            let books: Array<Book> = JSON.parse(JSON.stringify(this.books));
            const bookTitleRegEx = new RegExp(titleSearch,'gmi');
            const bookAuthorRegEx = new RegExp(authorSearch,'gmi');

            if ((titleSearch === '') && (authorSearch == '')) {
                return books;
            }
            
            if (titleSearch !== '') {
                books = books.filter(book => bookTitleRegEx.test(book.title));
            }
            
            if (authorSearch !== '') {
                books = books.filter(book => bookAuthorRegEx.test(book.author));
            }

            return books;

        } catch (error) {
            console.error(error);
        }
    }
}