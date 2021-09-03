export { };
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const booksJsonPath = path.resolve(__dirname, "./books.json");

//Function to read the JSON of created books
const readJsonBooks = () => {
    try {
        const books = fs.readFileSync(booksJsonPath);
        return JSON.parse(books);
    } catch (error) {
        console.error(error);
    }
};

export class Book {
    uuid: string;
    bookname: string;
    author: string;
    year: number;

    constructor(bookname: string, author: string, year: number) {
        this.uuid = uuidv4();
        this.bookname = bookname;
        this.author = author;
        this.year = year;
    }
}

export class Books {
    books: Array<Book>

    constructor() {
        this.books = readJsonBooks();
    }

    updateBooksJson() {
        try {
            fs.writeFileSync(booksJsonPath, JSON.stringify(this.books));
        } catch (error) {
            console.error(error);
        }
    }

    newBook(book) {
        try {
            this.books.push(book);
            this.updateBooksJson();
        } catch (error) {
            console.error(error);
        }
    }

    removeBook(id) {
        try {
            this.books = this.books.filter(book => book.uuid !== id);
            this.updateBooksJson();
        } catch (error) {
            console.error(error);
        }
    }

    findBookById(id) {
        try {
            const bookFound = this.books.find(book => book.uuid === id);
            return bookFound;
        } catch (error) {
            console.error(error);
        }
    }

    findBookByNameAndAuthor(bookname, author) {
        try {
            const bookFound = this.books.find(book => book.bookname === bookname && book.author === author);
            return bookFound;
        } catch (error) {
            console.error(error);
        }
    }

    findingBook(searching) {
        try {
            const foundBook = this.books.filter(book => searching.test(book.bookname) || searching.test(book.author));
            return foundBook;
        } catch (error) {
            console.error(error);
        }
    }
}