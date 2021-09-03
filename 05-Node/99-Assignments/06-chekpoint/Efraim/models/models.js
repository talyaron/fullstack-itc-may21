var Book = /** @class */ (function () {
    function Book(name, author) {
        this.name = name;
        this.author = author;
        this.bookID = "id" + Math.random().toString(16).slice(2);
    }
    return Book;
}());
var Books = /** @class */ (function () {
    function Books() {
        this.books = [];
    }
    Books.prototype.addBook = function (book) {
        try {
            this.books.push(book);
        }
        catch (e) {
            console.error(e);
        }
    };
    ;
    Books.prototype.findBook = function (bookId) {
        try {
            var book = this.books.find(function (usr) { return usr.bookID === bookId; });
            if (book) {
                return book;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Books;
}());
var books = new Books();
module.exports = { Book: Book, Books: Books, books: books };
