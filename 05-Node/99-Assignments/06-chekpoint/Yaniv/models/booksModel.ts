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

    searchBooks(titleSerch: string, authorSerach: string) {
        try {
            
            let books: Array<Book> = JSON.parse(JSON.stringify(this.books));
            const bookTitleRegEx = new RegExp(titleSerch,'gmi');
            const bookAuthorRegEx = new RegExp(authorSerach,'gmi');

            if ((titleSerch === '') && (authorSerach == '')) {
                return books;
            }

            if (titleSerch !== '') {
                books = this.books.filter(book => bookTitleRegEx.test(book.title));
            }

            if (authorSerach !== '') {
                books = this.books.filter(book => bookAuthorRegEx.test(book.author));
            }

            return books;

        } catch (error) {
            console.error(error);
        }
    }
}