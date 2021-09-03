class Book {

    name: string
    author: string;
    bookID: string;
    constructor(name, author) {
        
        this.name = name;
        this.author = author;
        this.bookID = "id" + Math.random().toString(16).slice(2);
    
    }
}


class Books {
    books: Array<Book>
    constructor() {
        this.books = [];
    }
    addBook(book: Book) {
        try {
            this.books.push(book);
        } catch (e) {
            console.error(e)
        }
    };
   
    findBook(bookId: string): Book {
        try {
            const book: Book = this.books.find(usr => usr.bookID === bookId);
            if (book) {
                return book
            }
        } catch (e) {
            console.error(e)
        }
    }
}
const books: Books = new Books();


module.exports = { Book, Books,  books }