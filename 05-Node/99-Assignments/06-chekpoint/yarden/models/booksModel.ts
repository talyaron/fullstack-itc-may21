export class Book {
    id: string
    name: string
    author: string
    constructor(name: string, author: string) {
        this.id = Math.random().toString(16)
        this.name = name
        this.author = author
    }
}

export class BooksList {
    booksArray: Array<Book>
    constructor() {
        this.booksArray = []
    }
    addUser(newBook: Book) {
        this.booksArray.push(newBook)
    }
}