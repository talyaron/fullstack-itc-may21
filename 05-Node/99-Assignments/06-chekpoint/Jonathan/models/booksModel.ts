export { };

const fs = require("fs");
const path = require("path");
const allBooksJSON = path.resolve(__dirname, "./data/books.json");
const { v4: uuidv4 } = require("uuid");


export const readAllBooks = () => {
    try {
        const allBooks = fs.readFileSync(allBooksJSON);
        return JSON.parse(allBooks);
    } catch (e) {
        return e;
    }
};

export class Book {
    id: string;
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.id = uuidv4()
        this.title = title;
        this.author = author;
    }
}

export class Books {
    books: Array<Book>;

    constructor() {
        this.books = readAllBooks()
    }

    addBook(book: Book) {
        try {
            if (!book) throw new Error("No book founded")
            this.books.push(book)
            this.writeAllBooks()
        } catch (e) {
            return e
        }
    }

    deleteBook(id: string) {
        this.books = this.books.filter(book => book.id !== id)
        this.writeAllBooks()
    }

    findBookByTitle(title: string) {
        try {
            if (!title) throw new Error("No title founded")
            const findBook = this.books.find(book => book.title === title)
            return findBook
        } catch (e) {
            return e
        }
    }

    findSpecialCharacter(title: string, author: string) {
        try {
            if (!title || !author) throw new Error("No title or author founded")
            const format: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
            const isSpecialTitle: boolean = format.test(title)
            const isSpecialAuthor: boolean = format.test(author)
            return (isSpecialTitle || isSpecialAuthor)
        } catch (e) {
            return e
        }
    }

    searchBooksByTitle(title: string) {
        try {
            if (!title) throw new Error("No title founded")
            const regrExp: string = `${title}`
            const searchTermReg: RegExp = new RegExp(regrExp, 'i');
            const booksFounded: Array<Book> = this.books.filter(books => searchTermReg.test(books.title))
            return booksFounded
        } catch (e) {
            return e
        }
    }

    writeAllBooks() {
        try {
            fs.writeFileSync(allBooksJSON, JSON.stringify(this.books))
        } catch (e) {
            return e
        }

    }
}