export { };
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const booksJsonPath = path.resolve(__dirname, "./books.json");

//Function to read the JSON of created users
const readJsonBooks = () => {
    try {
        const books = fs.readFileSync(booksJsonPath);
        return JSON.parse(books);
    } catch (error) {
        console.error(error);
    }
};

export class Book {
  id:string;
  bookName:string;
  bookAuth:string;

    constructor(bookName:string, bookAuth:string) {
        this.id = uuidv4();
        this.bookName = bookName;
        this.bookAuth= bookAuth;
       
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

   addNewBook(book) {
        try {
            this.books.push(book);
            this.updateBooksJson();
        } catch (error) {
            console.error(error);
        }
    }



}